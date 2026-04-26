import { $Enums } from "@prisma/client";
import z from "zod";


export const createPeopleSchema = z.object({
    name: z.string().min(2).max(150),
    cellphone: z.string().min(11).max(12).optional(),
    photo: z.string().optional(),
    userId: z.uuid  ("ID inválido")
});

export const updatePeopleSchema = z.object({
    id: z.uuid("ID inválido"),
    name: z.string().min(2).max(150).optional(),
    cellphone: z.string().min(11).max(12).optional().optional(),
    role: z.enum($Enums.Role).optional(),
    photo: z.string().optional().optional(),
    userId: z.uuid().optional()
});

export type PeopleDtoCreate = z.infer<typeof createPeopleSchema>;
export type PeopleDtoUpdate = z.infer<typeof updatePeopleSchema>;

export type PeopleDtoView = {
    name: string;
    id: string;
    cellphone: string | null;
    role: $Enums.Role;
    photo: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
};