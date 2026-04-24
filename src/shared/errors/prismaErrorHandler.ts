import { Prisma } from "@prisma/client";

interface PrismaErrorResponse {
    status: number;
    message: string;
}

export const handlePrismaError = (error: Prisma.PrismaClientKnownRequestError): PrismaErrorResponse => {
    switch (error.code) {
        case 'P2002':
            // Unique constraint failed (ex: email duplicado)
            return { 
                status: 409, 
                message: `O campo ${error.meta?.target} já está em uso.` 
            };
        case 'P2025':
            // Record not found (findUniqueOrThrow / update / delete)
            return { 
                status: 404, 
                message: "O registro solicitado não foi encontrado no banco de dados." 
            };
        case 'P2003':
            // Foreign key constraint failed
            return { 
                status: 400, 
                message: "Violação de relacionamento. Verifique se os IDs informados existem." 
            };
        default:
            return { 
                status: 500, 
                message: `Erro no banco de dados (Código: ${error.code})` 
            };
    }
}