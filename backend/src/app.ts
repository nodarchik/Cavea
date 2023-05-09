import express from "express";
import cors from "cors";
import inventoryRoutes from "./routes/inventory.routes";
import { Inventory } from './models/inventory'; 

const app = express();
app.use(cors());
app.use(express.json());

app.use("/inventories", inventoryRoutes); 

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

Inventory.sync() 
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error) => {
    console.log('Error syncing database:', error);
  });
