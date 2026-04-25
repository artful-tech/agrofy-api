import { FieldLog, Prisma } from "@prisma/client";
import { FieldLogDtoView } from "../../shared/dtos/FieldLogDto";


export type FieldLogModel = FieldLog;
export type FieldLogModelCreate = Prisma.FieldLogCreateInput;
export type FieldLogModelUpdate = Prisma.FieldLogUpdateInput;

export class FieldLogMapper {
    
    public static toView(fieldLogs: any[]): FieldLogDtoView[] {
        return fieldLogs.map((fieldLog) => ({
            id: fieldLog.id,
            description: fieldLog.description,
            category: fieldLog.category,
            date: fieldLog.date,
            seasonId: fieldLog.seasonId,
        }));
    }
}