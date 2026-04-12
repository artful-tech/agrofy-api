export type CreateFarmDto = {
    name: string;
    ownerName: string | null;
    totalArea: number;
    location: string;
    address: string | null;
}

export type UpdateFarmDto = {
    name: string;
    ownerName?: string | null;
    totalArea?: number;
    location?: string;
    address?: string | null;
}

export type ViewFarmDto = {
    name: string;
    id: string;
    ownerName?: string | null;
    totalArea: number;
    location: string;
    address?: string | null;
    createdAt: Date;
    updatedAt?: Date | null;
}