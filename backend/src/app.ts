import express from "express";
import cors from "cors";
import inventoryRoutes from "./routes/inventory.routes";
import { Inventory } from './models/inventory'; 

const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Mount inventory routes under the "/inventories" path
app.use("/inventories", inventoryRoutes); 

const PORT = process.env.PORT || 3001;
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Sync the Inventory model with the database
Inventory.sync() 
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error) => {
    console.log('Error syncing database:', error);
  });
