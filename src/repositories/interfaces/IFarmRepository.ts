import { Farm } from "@prisma/gen-client";

export interface IFarmRepository {
    findAll(): Promise<Farm[]>;
}