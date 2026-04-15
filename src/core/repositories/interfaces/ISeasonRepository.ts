import { Season } from "@prisma/gen-client";

export interface ISeasonRepository {
    findAll (): Promise<Season[]>;
}