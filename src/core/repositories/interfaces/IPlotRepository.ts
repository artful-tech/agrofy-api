import { Plot } from "@prisma/gen-client";

export interface IPlotRepository {
    findAll(): Promise<Plot[]>;
}