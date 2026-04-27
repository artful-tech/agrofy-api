import z from "zod";


export const idUUIDParamSchema = z.object({
    id: z.uuid("O formato do ID está inválido.")
});