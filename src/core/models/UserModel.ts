import { Prisma, User } from "@prisma/client";
import { UserDtoCreate, PasswordDtoUpdate, UserDtoView } from "../../shared/dtos/UserDto";


export type UserModel = User;
export type UserModelCreate = Prisma.UserCreateInput;
export type UserModelUpdate = Prisma.UserUpdateInput;

export class UserMapper {

    static toView(model: UserModel): UserDtoView;
    static toView(models: UserModel[]): UserDtoView[];

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: UserModel | UserModel[]): UserDtoView | UserDtoView[] {
        if (Array.isArray(model)) {
            return model.map(item => this.mapToDto(item));
        }
        return this.mapToDto(model);
    }

    /**
     * Transforma o que vem do Front-end (View) Create para o Modelo de Domínio
     */
    static fromCreateDtoToInput(dto: UserDtoCreate): UserModelCreate {
        return {
            email: dto.email,
            password: dto.password,
            people: dto.people ? {
                create: {
                    name: dto.people.name,
                    cellphone: dto.people.cellphone,
                    photo: dto.people.photo,
                }
            } : undefined
        };
    }

    static fromUpdateDtoToInput(dto: PasswordDtoUpdate): UserModelUpdate {
        return {
            email: dto.email,
            password: dto.newPassword
        };
    }

    private static mapToDto(model: UserModel): UserDtoView {
        return {
            id: model.id,
            email: model.email,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt
        };
    }
}