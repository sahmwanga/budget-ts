import { BaseService } from './base.service';
import Expense from '../models/expense.model';
import { IExpense } from '../models/types';

export class ExpenseService extends BaseService {
  constructor() {
    super();
  }
  async create(args: IExpense): Promise<any> {
    return await Expense.create(args);
  }
  async deleteOne(args: { id: string }): Promise<any> {
    return Expense.deleteOne(args);
  }
  async deleteMany(ids: string[]): Promise<any> {
    for (const id of ids) {
      Expense.deleteOne({ id });
    }
    return true;
  }
  async findOne(args: { id: string }): Promise<any> {
    // const docId = Types.ObjectId(id);
    return Expense.findById(args);
  }
  async findMany(): Promise<any> {
    const response = await Expense.find({});
    return response as IExpense[];
  }
}
