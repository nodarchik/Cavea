import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  listProducts,
} from "../controllers/product.controller";

const router = Router();

router.post("/", addProduct);
router.get("/", listProducts);
router.delete("/:id", deleteProduct);

export default router;
