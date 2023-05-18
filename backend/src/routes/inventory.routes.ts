import { Router } from "express";
import {
  addInventory,
  deleteInventory,
  listInventories,
} from "../controllers/inventory.controller";

const router = Router();

// Route for adding an inventory item
router.post("/", addInventory);
// Route for listing all inventories
router.get("/", listInventories); 
// Route for deleting an inventory item by ID
router.delete("/:id", deleteInventory); 

export default router;
