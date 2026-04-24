import { PrismaClient } from "@prisma/client";
import { IFieldLogRepository } from "./interfaces";

export class FieldLogRepository implements IFieldLogRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async () => {
        return this.prisma.fieldLog.findMany();
    }
}