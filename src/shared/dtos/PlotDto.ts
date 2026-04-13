export type CreatePlotDto = {
    name: string;
    area: number;
    unity: string;
    soilType?: string;
    farmId: string;
    photo?: string;
    observation?: string;
}

export type UpdatePlotDto = {
    name?: string;
    id: string;
    area?: number;
    unity?: string;
    soilType?: string;
    farmId?: string;
    photo?: string;
    observation?: string;
}

export type ViewPlotDto = {
    name: string;
    id: string;
    area: number;
    unity: string;
    soilType: string | null;
    farmId: string;
    photo: string | null;
    observation: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}