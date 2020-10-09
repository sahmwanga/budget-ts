import { BaseService } from '../base.service';
import Category from '../../models/budget/category.model';
import Transfer from '../../models/transfer.model';
import { ICategory, ITransfer } from '../../models/types';
import { TransferBaseService } from '../transfer.base';

export class CategoryService implements BaseService {
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
