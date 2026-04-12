export type CreateUserDto = {
    name: string;
    email: string;
}

export type UpdateUserDto = {
    id: string;
    name?: string | null;
    email?: string | null;
}

export type ViewUserDto = {
    name: string;
    id: number;
    email: string;
    createdAt: Date;
    updatedAt?: Date | null;
}