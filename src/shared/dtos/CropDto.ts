import z from "zod/v4";


export const createCropSchema = z.object({
    name: z.string().min(2, "Nome muito curto"),
    variety: z.string().optional(),
    photo: z.url("URL da foto inválida").optional(),
    daysToHarvest: z.number().positive("Deve ser maior que zero"),
    observation: z.string().optional()
});

export const updateCropSchema = z.object({
    id: z.uuid("ID inválido"),
    name: z.string().min(2).optional(),
    variety: z.string().optional(),
    photo: z.url().optional(),
    daysToHarvest: z.number().positive().optional(),
    observation: z.string().optional()
});

export type CreateCropDto = z.infer<typeof createCropSchema>;
export type UpdateCropDto = z.infer<typeof updateCropSchema>;

export type ViewCropDto = {
    id: string;
    name: string;
    variety: string | null;
    photo: string | null;
    daysToHarvest: number;
    observation: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}