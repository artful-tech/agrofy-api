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

    public getByEmail = async (email: string): Promise<ViewUserDto> => {
        const userModel = await this.userRepository.findByEmail(email);
        return UserMapper.toView(userModel);
    }

    public getOne(id: string): Promise<ViewUserDto | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: { email: string; password: string; confirmPassword: string; }): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: { email: string; actualPassword: string; newPassword: string; newConfirmPassword: string; }): Promise<ViewUserDto> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}