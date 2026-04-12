import { ViewUserDto } from "../../views/dto/UserDto";
import { IUserRepository } from "../repositories/interfaces";
import { IUserUsecase } from "./interfaces";

export class UserUsecase implements IUserUsecase {
    constructor(private userRepository: IUserRepository) {}
    
    public getAll = async (): Promise<ViewUserDto[]> => {
        const users = await this.userRepository.findAll();

        if (!users) {
            return [];
        }

        return users.map(user => ({
            name: user.name,
            id: user.id,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }));
    }
}