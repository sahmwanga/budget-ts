import { BaseService } from '../base.service';
import Budget from '../../models/budget/budget.model';
import { IBudget } from '../../models/types';

export class BudgetService extends BaseService {
  async deleteOne(args: { id: string }): Promise<any> {
    return Budget.deleteOne(args);
  }
  constructor() {
    super();
  }
  async create(args: IBudget): Promise<any> {
    return await Budget.create(args);
  }
  async deleteMany(ids: string[]): Promise<any> {
    for (const id of ids) {
      Budget.deleteOne({ id });
    }
    return true;
  }
  async findOne(args: { id: string }): Promise<any> {
    // const docId = Types.ObjectId(id);
    return Budget.findById(args);
  }
  async findMany(): Promise<any> {
    const response = await Budget.find({});
    return response;
  }
}
