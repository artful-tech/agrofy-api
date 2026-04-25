import { PrismaClient } from "@prisma/client";
import { IPlotRepository } from "./interfaces";
import { PlotModel, PlotModelCreate, PlotModelUpdate } from "../models/PlotModel";


export class PlotRepository implements IPlotRepository {
    constructor(private prisma: PrismaClient) { }

    public findAll = async (): Promise<PlotModel[]> => {
        return await this.prisma.plot.findMany();
    }

    public findOne = async (id: string): Promise<PlotModel> => {
        throw new Error("Method not implemented.");
    }

    public create = async (model: PlotModelCreate): Promise<string | null> => {
        throw new Error("Method not implemented.");
    }

    public update = async (model: PlotModelUpdate): Promise<PlotModel | null> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (id: string): Promise<boolean> => {
        throw new Error("Method not implemented.");
    }

    
}