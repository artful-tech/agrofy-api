import { Season, PrismaClient } from "@prisma/gen-client";
import { ISeasonRepository} from"./interfaces/ISeasonRepository";

export class SeasonRepository implements ISeasonRepository {
    constructor(private prisma: PrismaClient) { }

 findAll = async (): Promise<Season[]> => {
        return this.prisma.season.findMany();
    }
}