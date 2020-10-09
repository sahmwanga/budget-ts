import { BaseService } from '../base.service';
import Budget from '../../models/budget/budget.model';
import Transfer from '../../models/transfer.model';
import { IBudget, ITransfer } from '../../models/types';
import { TransferBaseService } from '../transfer.base';
import { response } from 'express';

export class BudgetService implements BaseService, TransferBaseService {
  async createTransaction(obj: ITransfer): Promise<ITransfer> {
    const response = await Transfer.create(obj);
    return response;
  }

  async updateBudgetAmount(targetCategory: any, amount: number) {
    console.log({ targetCategory, amount });
    const response = await Budget.update(
      { categoryId: targetCategory },
      { $inc: { amount: amount } }
      // { upsert: true }
    );
    // console.log(response);
    return response;
  }

  async transfer(obj: ITransfer): Promise<any> {
    // update budget amount
    const increaseAmount = await this.updateBudgetAmount(
      obj.transferTo,
      obj.amount
    );

    // update budget1 amount;
    const reduceAmount = await this.updateBudgetAmount(
      obj.transferFrom,
      -obj.amount
    );

    await this.createTransaction(obj);

    return { increaseAmount, reduceAmount };
  }
  async getTransfers(): Promise<ITransfer[]> {
    const response = await Transfer.find({});
    return response;
  }
  async deleteOne(args: { id: string }): Promise<any> {
    return Budget.deleteOne(args);
  }

  async create(args: IBudget): Promise<any> {
    return (await Budget.create(args)) as IBudget;
  }
  async deleteMany(ids: string[]): Promise<any> {
    for (const id of ids) {
      Budget.deleteOne({ id });
    }
    return true;
  }
  async findOne(args: { _id: any }): Promise<any> {
    return Budget.findById(args);
  }
  async findMany(): Promise<any> {
    const response = await Budget.find({});
    return response;
  }
}
