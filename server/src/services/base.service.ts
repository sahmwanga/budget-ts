export abstract class BaseService {
  constructor() {}
  abstract async create(args: any): Promise<void | any>;
  abstract async deleteOne(args: { id: string }): Promise<void | any>;
  abstract async deleteMany(ids: string[]): Promise<void | any>;
  abstract async findOne(args: { _id: string }): Promise<void | any>;
  abstract async findMany(): Promise<void | any>;
}
