import { IBudget, ICategory, IExpense } from '../../models/types';
import { Types } from 'mongoose';

export const category: ICategory = {
  name: 'testCategory',
  description: 'Test category',
  userId: '1',
};

export const budget: IBudget = {
  budgetDate: new Date().toISOString(),
  categoryId: Types.ObjectId(),
  amount: 1000,
  userAccountId: 1,
  userId: '1',
  recurring: true,
  recurringDate: new Date().toISOString(),
};

export const expenses: IExpense = {
  expenseDate: new Date().toISOString(),
  amount: 100,
  description: 'Family',
  userId: '1',
  categoryId: Types.ObjectId(),
};
