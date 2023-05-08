import { Request, Response } from "express";
import { Product } from "../models/product";
import { Op } from "sequelize";

export const addProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "Error adding product", error });
  }
};

export const listProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const offset = parseInt(req.query.offset as string) || 0;
  const limit = parseInt(req.query.limit as string) || 20;
  const location = req.query.location as string | undefined;

  const queryOptions: any = { limit, offset };
  if (location) {
    queryOptions.where = { location };
  }

  try {
    const products = await Product.findAndCountAll(queryOptions);
    res
      .status(200)
      .json({ products: products.rows, totalCount: products.count });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};


export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id, 10);
    await Product.destroy({ where: { id: productId } });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting product", error });
  }
};
