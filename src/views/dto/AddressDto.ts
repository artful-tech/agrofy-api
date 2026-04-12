export type CreateAddressDto = {
    number?: number;
    street?: string;
    complement?: string;
    neighborhood?: string;
    city: string;
    state: string;
    country: string;
}

export type UpdateAddressDto = {
    number?: number;
    id: string;
    street?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    country?: string;
}

export type ViewAddressDto = {
    number: number | null;
    id: string;
    street: string | null;
    complement: string | null;
    neighborhood: string | null;
    city: string;
    state: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}