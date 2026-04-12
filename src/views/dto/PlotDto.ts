export type CreatePlotDto = {
    name: string;
    area?: number | null;
    soilType?: string | null;
    farmId: string;
}

export type UpdatePlotDto = {
    id: string;
    name?: string | null;
    area?: number | null;
    soilType?: string | null;
    farmId?: string | null;
}

export type ViewPlotDto = {
    name: string;
    id: string;
    area: number;
    soilType: string | null;
    farmId: string;
    createdAt: Date;
    updatedAt?: Date | null;
}