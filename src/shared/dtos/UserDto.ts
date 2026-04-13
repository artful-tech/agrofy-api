export type CreateUserDto = {
    email: string;
    password: string;
}

export type UpdatePasswordDto = {
    email: string;
    currentPassword: string;
    newPassword: string;
}

export type ViewUserDto = {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}