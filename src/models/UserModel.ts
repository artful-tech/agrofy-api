export interface UserModel {
  id: number
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserDTO {
  name: string
  email: string
}

export interface UpdateUserDTO {
  name?: string
  email?: string
}