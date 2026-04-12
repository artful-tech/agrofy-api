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
    id: string;
    email: string;
    createdAt: Date;
    updatedAt?: Date | null;
}