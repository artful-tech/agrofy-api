import { Router } from "express";
import { FieldLogController } from "../controllers/FieldLogController";

export default function FieldLogRouter(controller: FieldLogController) {
    const router = Router();

    router.get("/", controller.getAll);

    return router;
}