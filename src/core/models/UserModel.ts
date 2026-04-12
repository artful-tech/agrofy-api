import { Prisma, User } from "@prisma/gen-client";
import { CreateUserDto, UpdatePasswordDto, ViewUserDto } from "../../views/dto/UserDto";

export type UserModel = User;

export class UserMapper {
    static toView(model: UserModel): ViewUserDto;
    static toView(models: UserModel[]): ViewUserDto[];

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: UserModel | UserModel[]): ViewUserDto | ViewUserDto[] {
        if (Array.isArray(model)) {
            return model.map(item => this.mapToDto(item));
        }
        return this.mapToDto(model);
    }

    /**
     * Transforma o que vem do Front-end (View) Create para o Modelo de Domínio
     */
    static fromCreateDtoToInput(dto: CreateUserDto): Prisma.UserCreateInput {
        return {
            email: dto.email,
            password: dto.password
        };
    }

    static fromUpdateDtoToInput(dto: UpdatePasswordDto): Prisma.UserUpdateInput {
        return {
            email: dto.email,
            password: dto.newPassword
        };
    }

    private static mapToDto(model: UserModel): ViewUserDto {
        return {
            id: model.id,
            email: model.email,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt
        };
    }
}