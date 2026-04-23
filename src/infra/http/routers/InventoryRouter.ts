import { Router } from "express";
import { inventoryController } from "../../factories/InventoryFactory";

const router = Router();

router.get("/", inventoryController.findAll);
router.get("/:id", inventoryController.findById);
router.post("/", inventoryController.create);
router.put("/:id", inventoryController.update);
router.delete("/:id", inventoryController.delete);

export default router;