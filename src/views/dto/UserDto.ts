export type CreateUserDto = {
  name: string
  email: string
}

export type UpdateUserDto = {
  name?: string
  email?: string
}

export type ViewUserDto = {
    name: string;
    id: string;
    variety: string | null;
    daysToHarvest: number;
    createdAt: Date;
    updatedAt?: Date;
}