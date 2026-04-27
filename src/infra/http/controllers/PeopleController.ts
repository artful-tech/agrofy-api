import { Request, Response } from "express";
import { IPeopleController } from "./interfaces";
import { IPeopleUsecase } from "../../../core/usecases/interfaces";
import { PeopleDtoCreate, PeopleDtoUpdate, PeopleDtoView } from "../../../shared/dtos/PeopleDto";

export class PeopleController implements IPeopleController {
    constructor(private peopleUsecase: IPeopleUsecase) { }
    
    public index = async (_req: Request, res: Response): Promise<Response> => {
        const peoples = await this.peopleUsecase.getAll();
        return res.json(peoples);
    }

    public getOne = async (req: Request<{id: string}>, res: Response): Promise<Response> => {
        const { id } = req.params;
        const people = await this.peopleUsecase.getOne(id);
        return res.json(people);
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const peopleDto: PeopleDtoCreate = req.body;
        const id: string = await this.peopleUsecase.create(peopleDto);
        res.setHeader('x-resource-id', id);
        res.setHeader('Location', `/api/people/${id}`);
        return res.status(201).send();
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        const peopleDto: PeopleDtoUpdate = req.body;
        const people: PeopleDtoView = await this.peopleUsecase.update(peopleDto);
        return res.status(200).json(people);
    }

    public delete = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
        const { id } = req.params;
        await this.peopleUsecase.delete(id);
        return res.status(204).send();
    }
    
}