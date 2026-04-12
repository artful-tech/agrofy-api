export type CreateCropDto = {
    name: string;
    variety?: string | null;
    daysToHarvest: number;
}

export type UpdateCropDto = {
    name?: string
    email?: string
}

export type ViewCropDto = {
    name: string;
    id: string;
    variety: string | null;
    daysToHarvest: number;
    createdAt: Date;
    updatedAt?: Date;
}