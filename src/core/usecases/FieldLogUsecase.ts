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

    public getOne(id: string): Promise<ViewFieldLogDto | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: any): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: any): Promise<ViewFieldLogDto> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}