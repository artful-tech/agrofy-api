import { Crop } from "@prisma/gen-client";

export interface ICropRepository {
    findAll(): Promise<Crop[]>
}