import { Router } from "express";
import {
  addInventory,
  deleteInventory,
  listInventories,
} from "../controllers/inventory.controller";

const router = Router();

router.post("/", addInventory);
router.get("/", listInventories); 
router.delete("/:id", deleteInventory); 

export default router;
