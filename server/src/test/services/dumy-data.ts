import { IBudget, ICategory, IExpense, ITransfer } from '../../models/types';
import { Types } from 'mongoose';

export const category: ICategory = {
  name: 'testCategory',
  description: 'Test category',
  userId: '1',
};

export const budget: IBudget = {
  budgetDate: new Date(),
  categoryId: Types.ObjectId(),
  amount: 1000,
  userAccountId: 1,
  userId: '1',
  recurring: true,
  recurringDate: new Date(),
};

export const expenses: IExpense = {
  expenseDate: new Date(),
  amount: 100,
  description: 'Family',
  userId: '1',
  categoryId: Types.ObjectId(),
};

export const transfer: ITransfer = {
  transferTo: Types.ObjectId(),
  transferDate: new Date(),
  transferFrom: Types.ObjectId(),
  amount: 1000,
  userId: '1',
  userAccountId: 1,
  type: 'bank',
};
