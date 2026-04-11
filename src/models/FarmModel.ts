export interface FarmModel {
  id: number
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateFarmDTO {
  name: string
  email: string
}

export interface UpdateFarmDTO {
  name?: string
  email?: string
}