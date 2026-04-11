import { Plot, PrismaClient } from "@prisma/gen-client";
import { IPlotRepository } from "./interfaces/IPlotRepository";


export class PlotRepository implements IPlotRepository {
    constructor(private prisma: PrismaClient) { }

    findAll = async (): Promise<Plot[]> => {
        return this.prisma.plot.findMany();
    }
}