import { Request, Response } from 'express'
import { IUserUsecase } from '../../../core/usecases/interfaces'
import { IUserController } from './interfaces'
import { UserDtoView } from '../../../shared/dtos/UserDto'


export class UserController implements IUserController {

    constructor(private userUsecase: IUserUsecase) {}

    public index = async (req: Request, res: Response): Promise<Response> => {
        const users: UserDtoView[] = await this.userUsecase.getAll()
        return res.json(users)
    }

    public getByEmail = async (req: Request<{email: string}>, res: Response): Promise<Response> => {
        const { email } = req.body;
        const user: UserDtoView = await this.userUsecase.getByEmail(email);
        return res.json(user);
    }

    public getOne = async (_req: Request, res: Response): Promise<Response> => {
        throw new Error('Method not implemented.')
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        throw new Error('Method not implemented.')
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        throw new Error('Method not implemented.')
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        throw new Error('Method not implemented.')
    }
}