export interface CropModel {
  id: number
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateCropDTO {
  name: string
  email: string
}

export interface UpdateCropDTO {
  name?: string
  email?: string
}