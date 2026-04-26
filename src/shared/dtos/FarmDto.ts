import { AddressDtoCreate, AddressDtoUpdate, CreateAddressSchema } from "./AddressDto";
import z from "zod/v4";

export const createFarmSchema = z.object({
    name: z.string().min(2).max(150),
    totalArea: z.number().positive(),
    unity: z.string().min(1).max(20),
    resume: z.string().optional(),
    photo: z.string().optional(),
    address: CreateAddressSchema,
    observation: z.string().optional(),
});

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

