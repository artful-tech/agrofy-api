import { IInventoryRepository } from "../core/repositories/interfaces/IInventoryRepository";

export class InventoryUsecase {
  constructor(private repository: IInventoryRepository) {}

  findAll = async () => {
    return this.repository.findAll();
  };

  findById = async (id: string) => {
    return this.repository.findById(id);
  };

  create = async (data: any) => {
    return this.repository.create(data);
  };

  update = async (id: string, data: any) => {
    return this.repository.update(id, data);
  };

  delete = async (id: string) => {
    return this.repository.delete(id);
  };
}