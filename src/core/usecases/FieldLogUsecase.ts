import { ViewFieldLogDto } from "../../shared/dtos/FieldLogDto";
import { FieldLogMapper } from "../models/FieldLogModel";
import { IFieldLogRepository } from "../repositories/interfaces";
import { IFieldLogUsecase } from "./interfaces";

export class FieldLogUsecase implements IFieldLogUsecase {
    constructor(private fieldLogRepository: IFieldLogRepository) {}

    public getAll = async (): Promise<ViewFieldLogDto[]> => {
        const fieldLogs = await this.fieldLogRepository.findAll();

        if (!fieldLogs) {
            return [];
        }

        return FieldLogMapper.toView(fieldLogs);
    }
}