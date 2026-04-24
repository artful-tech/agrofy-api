import { $Enums, PrismaClient } from "@prisma/client";
import { IFieldLogRepository } from "./interfaces";

export class FieldLogRepository implements IFieldLogRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async () => {
        return await this.prisma.fieldLog.findMany();
    }

    public findOne(id: string): Promise<{ id: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; description: string; category: $Enums.LogCategory; date: Date; seasonId: string; } | null> {
        throw new Error("Method not implemented.");
    }

    public create(model: { id: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; description: string; category: $Enums.LogCategory; date: Date; seasonId: string; }): Promise<string | null> {
        throw new Error("Method not implemented.");
    }

    public update(model: { id: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; description: string; category: $Enums.LogCategory; date: Date; seasonId: string; }): Promise<{ id: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; description: string; category: $Enums.LogCategory; date: Date; seasonId: string; } | null> {
        throw new Error("Method not implemented.");
    }

    public delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    
}