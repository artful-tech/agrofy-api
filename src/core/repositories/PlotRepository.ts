import { PrismaClient } from "@prisma/client";
import { IPlotRepository } from "./interfaces";
import { PlotModel } from "../models/PlotModel";


export class PlotRepository implements IPlotRepository {
    constructor(private prisma: PrismaClient) { }

    findAll = async (): Promise<PlotModel[]> => {
        return this.prisma.plot.findMany();
    }
}