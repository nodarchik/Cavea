import fs from "fs";
import pkg from "pg";
const { Pool } = pkg;
import { faker } from "@faker-js/faker";

async function insertInventoriesToDatabase(inventories) {
  const pool = new Pool({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "cavea",
    port: 5432,
  });

  const insertInventoryQuery =
  'INSERT INTO "Inventories" ("name", "location", "price", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5)';

  try {
    await pool.connect();
    for (const inventory of inventories) {
      const { location, name, price, createdAt, updatedAt } = inventory;
    
      await pool.query(insertInventoryQuery, [name, location, price, createdAt, updatedAt]);
    }
    
    console.log("Inserted inventories into the database.");
  } catch (err) {
    console.error("Error connecting to the database: ", err);
  } finally {
    await pool.end();
  }
}

function createInventory(location) {
  const now = new Date();
  return {
    id: faker.datatype.uuid(),
    location: location,
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    createdAt: now,
    updatedAt: now,
  };
}

function generateInventories(n) {
  const inventories = [];
  const locations = [
    "მთავარი ოფისი",
    "კავეა გალერია",
    "კავეა თბილისი მოლი",
    "კავეა ისთ ფოინთი",
    "კავეა სითი მოლი",
  ];

  for (let i = 0; i < n; i++) {
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];
    inventories.push(createInventory(randomLocation));
  }
  return inventories;
}

const inventories = generateInventories(300000);
fs.writeFileSync("testInventories.json", JSON.stringify(inventories, null, 2));

// Insert the generated inventories into the database
insertInventoriesToDatabase(inventories);

console.log("Test inventories generated successfully!");
