export type CreateCropDto = {
    name: string;
    variety?: string | null;
    daysToHarvest: number;
}

export type UpdateCropDto = {
    id: string;
    name?: string | null;
    variety?: string | null;
    daysToHarvest?: number | null;
}

export type ViewCropDto = {
    name: string;
    id: string;
    variety?: string | null;
    daysToHarvest: number;
    createdAt: Date;
    updatedAt?: Date;
}