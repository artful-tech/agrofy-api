import { CreateAddressDto, UpdateAddressDto, ViewAddressDto } from "./AddressDto";

export type CreateFarmDto = {
    name: string;
    totalArea: number;
    unity: string;
    resume?: string;
    photo?: string;
    address: CreateAddressDto;
    observation?: string;
}

export type UpdateFarmDto = {
    name?: string;
    id: string;
    totalArea?: number;
    unity?: string;
    resume?: string;
    photo?: string;
    address?: UpdateAddressDto;
    observation?: string;
}

export type ViewFarmDto = {
    name: string;
    id: string;
    totalArea: number;
    unity: string;
    resume: string | null;
    photo: string | null;
    addressId: string;
    observation: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}