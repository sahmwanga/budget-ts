import { BaseService } from './base.service';
import Category from '../models/category.model';
import { ICategory } from '../models/types';

export class CategoryService extends BaseService {
  constructor() {
    super();
  }
  async create(args: ICategory): Promise<any> {
    return await Category.create(args);
  }
  async deleteOne(args: { id: string }): Promise<any> {
    return Category.deleteOne(args);
  }
  async deleteMany(ids: string[]): Promise<any> {
    for (const id of ids) {
      Category.deleteOne({ id });
    }
    return true;
  }
  async findOne(args: { id: string }): Promise<any> {
    // const docId = Types.ObjectId(id);
    return Category.findById(args);
  }
  async findMany(): Promise<any> {
    const response = await Category.find({});
    return response as ICategory[];
  }
}
