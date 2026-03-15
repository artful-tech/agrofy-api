import z from "zod";

export const cropModel = z.object({
    name: z.string()
})