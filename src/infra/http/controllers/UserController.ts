import { Request, Response } from 'express'
import { IUserUsecase } from '../../../core/usecases/interfaces'
import { IUserController } from './interfaces'
import { ViewUserDto } from '../../../shared/dtos/UserDto'


export class UserController implements IUserController {

    constructor(private userUsecase: IUserUsecase) {}

    public index = async (req: Request, res: Response): Promise<Response> => {
        const users: ViewUserDto[] = await this.userUsecase.getAll()
        return res.json(users)
    }

    // public show = async (req: Request, res: Response) => {
    //     const user = await this.userUsecase.findById(Number(req.params.id))
    //     if (!user) return res.status(404).json({ message: 'User not found' })
    //     return res.json(user)
    // }

    // public store = async (req: Request, res: Response) => {
    //     const user = await this.userUsecase.create(req.body)
    //     return res.status(201).json(user)
    // }

    // public update = async (req: Request, res: Response) => {
    //     const user = await this.userUsecase.update(Number(req.params.id), req.body)
    //     return res.json(user)
    // }

    // public destroy = async (req: Request, res: Response) => {
    //     await this.userUsecase.delete(Number(req.params.id))
    //     return res.status(204).send()
    // }
}