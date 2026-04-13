import { ViewUserDto } from "../../shared/dtos/UserDto";
import { UserMapper } from "../models/UserModel";
import { IUserRepository } from "../repositories/interfaces";
import { IUserUsecase } from "./interfaces";

export class UserUsecase implements IUserUsecase {
    constructor(private userRepository: IUserRepository) {}
    
    public getAll = async (): Promise<ViewUserDto[]> => {
        const users = await this.userRepository.findAll();

        if (!users) {
            return [];
        }

        return UserMapper.toView(users);
    }
}