export type CreateCropDto = {
    name: string;
    variety?: string;
    photo?: string;
    daysToHarvest: number;
    observation?: string;
}

export type UpdateCropDto = {
    id: string;
    name?: string;
    variety?: string;
    photo?: string;
    daysToHarvest?: number;
    observation?: string;
}

export type ViewCropDto = {
    name: string;
    id: string;
    variety: string | null;
    photo: string | null;
    daysToHarvest: number;
    observation: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}