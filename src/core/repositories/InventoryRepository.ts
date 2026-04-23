import { PrismaClient } from "@prisma/client";
import { IInventoryRepository } from "./interfaces";
import { InventoryModel } from "../models/InventoryModel";

export class InventoryRepository implements IInventoryRepository {
  constructor(private prisma: PrismaClient) {}

  findAll = async (): Promise<InventoryModel[]> => {
    return this.prisma.inventoryItem.findMany();
  };
}