import { Request, Response } from "express";
import { Inventory } from "../models/inventory"; 

export const addInventory = async (req: Request, res: Response) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(400).json({ message: "Error adding inventory", error });
  }
};

export const listInventories = async (
  req: Request,
  res: Response
): Promise<void> => {
  const offset = parseInt(req.query.offset as string) || 0;
  const limit = parseInt(req.query.limit as string) || 20;
  const location = req.query.location as string | undefined;
  const sortBy = req.query.sortBy as string | undefined;

  const queryOptions: any = { limit, offset };
  if (location) {
    queryOptions.where = { location };
  }

  if (sortBy) {
    queryOptions.order = [[sortBy, 'ASC']];
  }
  
  try {
    const inventories = await Inventory.findAndCountAll(queryOptions);
    res
      .status(200)
      .json({ inventories: inventories.rows, totalCount: inventories.count });
  } catch (error) {
    res.status(500).json({ message: "Error fetching inventories", error });
  }
};

export const deleteInventory = async (req: Request, res: Response) => {
  try {
    const inventoryId = parseInt(req.params.id, 10);
    await Inventory.destroy({ where: { id: inventoryId } });
    res.status(200).json({ message: "Inventory deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting inventory", error });
  }
};
