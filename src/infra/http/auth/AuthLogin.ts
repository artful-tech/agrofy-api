import { Request, Response } from "express";
import { UserUsecase } from "../../../core/usecases/UserUsecase";
import { CreateUserDto } from "../../../shared/dtos/UserDto";

export class AuthLogin {
    constructor(private userUsecase: UserUsecase) { }

    public login = async (req: Request<CreateUserDto>, res: Response): Promise<Response> => {
        
        return res.json();
    }
}