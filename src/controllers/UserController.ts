import { Request, Response } from "express";

export default class UserController {

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;

        return res.json({
            "id": id,
            "name": "Fernando Guimarães",
            "city": "Maricá",
            "neightborhood": "Itapeba",
            "age": 27
        });
    }
}