import { AddressDtoCreate, AddressDtoUpdate } from "./AddressDto";

export type FarmDtoCreate = {
    name: string;
    totalArea: number;
    unity: string;
    resume?: string;
    photo?: string;
    address: AddressDtoCreate;
    observation?: string;
}

export type FarmDtoUpdate = {
    name?: string;
    id: string;
    totalArea?: number;
    unity?: string;
    resume?: string;
    photo?: string;
    address?: AddressDtoUpdate;
    observation?: string;
}

export type FarmDtoView = {
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