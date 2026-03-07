import { Request, Response } from 'express'
import { UserRepository } from '../repositories/UserRepository'

export class UserController {

    constructor(private userRepository: UserRepository) {}

    public index = async (req: Request, res: Response) => {
        const users = await this.userRepository.findAll()
        return res.json(users)
    }

    public show = async (req: Request, res: Response) => {
        const user = await this.userRepository.findById(Number(req.params.id))
        if (!user) return res.status(404).json({ message: 'User not found' })
        return res.json(user)
    }

    public store = async (req: Request, res: Response) => {
        const user = await this.userRepository.create(req.body)
        return res.status(201).json(user)
    }

    public update = async (req: Request, res: Response) => {
        const user = await this.userRepository.update(Number(req.params.id), req.body)
        return res.json(user)
    }

    public destroy = async (req: Request, res: Response) => {
        await this.userRepository.delete(Number(req.params.id))
        return res.status(204).send()
    }
}