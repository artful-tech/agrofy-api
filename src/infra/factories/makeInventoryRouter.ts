 { PrismaClient } from "@prisma/client";
import { InventoryRepository } from "../../core/repositories/InventoryRepository";
import { InventoryUsecase } from "../../usecases/InventoryUsecase";
import { InventoryController } from "../http/controllers/InventoryController";

const prisma = new PrismaClient();

const repository = new InventoryRepository(prisma);
const usecase = new InventoryUsecase(repository);

export const inventoryController = new InventoryController(usecase);