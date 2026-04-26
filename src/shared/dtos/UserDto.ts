import z from "zod";
import { createPeopleSchema } from "./PeopleDto";


export const CreateUserSchema = z.object({
    email: z.email().nonempty(),
    password: z.string().nonempty(),
    confirmPassword: z.string().nonempty(),
    people: createPeopleSchema.optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não conferem',
    path: ['confirmPassword']
})

export const UpdateUserSchema = z.object({
    email: z.email().nonempty(),
    actualPassword: z.string().nonempty(),
    newPassword: z.string().nonempty(),
    newConfirmPassword: z.string().nonempty()
}).refine((data) => data.newPassword === data.newConfirmPassword, {
    message: 'As senhas não conferem',
    path: ['confirmPassword']
})

export type UserDtoCreate = z.infer<typeof CreateUserSchema>;
export type PasswordDtoUpdate = z.infer<typeof UpdateUserSchema>;

export type UserDtoView = {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}