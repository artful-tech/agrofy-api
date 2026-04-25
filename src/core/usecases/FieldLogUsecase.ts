import { FieldLogDtoView } from "../../shared/dtos/FieldLogDto";
import { FieldLogMapper } from "../models/FieldLogModel";
import { IFieldLogRepository } from "../repositories/interfaces";
import { IFieldLogUsecase } from "./interfaces";

export class FieldLogUsecase implements IFieldLogUsecase {
    constructor(private fieldLogRepository: IFieldLogRepository) {}

    public getAll = async (): Promise<FieldLogDtoView[]> => {
        const fieldLogs = await this.fieldLogRepository.findAll();

        if (!fieldLogs) {
            return [];
        }

        return FieldLogMapper.toView(fieldLogs);
    }

    public getOne = async (id: string): Promise<FieldLogDtoView> => {
        throw new Error("Method not implemented.");
    }

    public create = async (createDto: any): Promise<string> => {
        throw new Error("Method not implemented.");
    }

    public update = async (updateDto: any): Promise<FieldLogDtoView> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (): Promise<void> => {
        throw new Error("Method not implemented.");
    }
}