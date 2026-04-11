export interface CreateUserDTO {
  name: string
  email: string
}

export interface UpdateUserDTO {
  name?: string
  email?: string
}