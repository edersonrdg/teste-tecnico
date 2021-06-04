import { UseCase } from "@shared/protocols/useCase";

export const makeService = () => {
  class ServiceStub implements UseCase {
    async execute(data: any): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }
  return new ServiceStub();
};
