import { Request, Response } from "express";
import { UserUsecase } from "../../../core/usecases/UserUsecase";
import { UserDtoCreate } from "../../../shared/dtos/UserDto";

export class AuthLogin {
    constructor(private userUsecase: UserUsecase) { }

    public login = async (req: Request<UserDtoCreate>, res: Response): Promise<Response> => {
        
        return res.json();
    }
}