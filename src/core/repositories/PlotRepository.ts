import { Plot, PrismaClient } from "@prisma/client";
import { IPlotRepository } from "./interfaces";


export class PlotRepository implements IPlotRepository {
    constructor(private prisma: PrismaClient) { }

    findAll = async (): Promise<Plot[]> => {
        return this.prisma.plot.findMany();
    }
}