import { ViewFieldLogDto } from "../../shared/dtos/FieldLogDto";


export class FieldLogMapper {
    
    public static toView(fieldLogs: any[]): ViewFieldLogDto[] {
        return fieldLogs.map((fieldLog) => ({
            id: fieldLog.id,
            description: fieldLog.description,
            category: fieldLog.category,
            date: fieldLog.date,
            seasonId: fieldLog.seasonId,
        }));
    }
}