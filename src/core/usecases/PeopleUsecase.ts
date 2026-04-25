import { PeopleDtoCreate, PeopleDtoUpdate, PeopleDtoView } from "../../shared/dtos/PeopleDto";
import { PeopleMapper } from "../models/PeopleModel";
import { IPeopleRepository } from "../repositories/interfaces";
import { IPeopleUsecase } from "./interfaces";

export class PeopleUsecase implements IPeopleUsecase {
    constructor(private peopleRepository: IPeopleRepository) {}

    public getAll = async (): Promise<PeopleDtoView[]> => {
        const peoples = await this.peopleRepository.findAll();
        return PeopleMapper.toView(peoples);
    }

    public getOne = async (id: string): Promise<PeopleDtoView | null> => {
        const people = await this.peopleRepository.findOne(id);
        return PeopleMapper.toView(people);
    }

    public create = async (createDto: PeopleDtoCreate): Promise<string> => {
        const model = PeopleMapper.fromCreateDtoToInput(createDto);
        return await this.peopleRepository.create(model);
    }

    public update = async (updateDto: PeopleDtoUpdate): Promise<PeopleDtoView> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (id: string): Promise<void> => {
        throw new Error("Method not implemented.");
    }
    
}