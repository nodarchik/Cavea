const faker = require('faker');
const { Inventory } = require('./src/models/inventory'); // Adjust the path to your Inventory model
function createTestInventory() {
    return {
      name: faker.commerce.productName(),
      location: faker.random.arrayElement([
        'მთავარი ოფისი',
        'კავეა გალერია',
        'კავეა თბილისი მოლი',
        'კავეა ისთ ფოინთი',
        'კავეა სითი მოლი',
      ]),
      price: faker.random.number({ min: 1, max: 10000 }),
    };
  }
  async function seedInventory(count) {
    const inventoryItems = [];
  
    for (let i = 0; i < count; i++) {
      inventoryItems.push(createTestInventory());
    }
  
    try {
      await Inventory.bulkCreate(inventoryItems);
      console.log(`Successfully inserted ${count} test inventory items.`);
    } catch (error) {
      console.error('Error inserting test inventory items:', error);
    }
  }
  seedInventory(300000);