import { BaseService } from './base.service';
import Expense from '../models/expense.model';
import { IExpense } from '../models/types';

export class ExpenseService {
  async createTransfer(): Promise<any> {
    const response = await Expense.find({});
    return response as IExpense[];
  }

  async transfer() {}

  async getTransfers(): Promise<any> {}
}
