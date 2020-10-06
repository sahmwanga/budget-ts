import { Types } from 'mongoose';

export interface ICategory {
  name: string;
  description: string;
  userId: string;
}

export interface IBudget {
  categoryId: Types.ObjectId;
  amount: number;
  budgetDate: string;
  recurring: boolean;
  recurringDate: string;
  userAccountId: number;
  userId: string;
}

export interface IExpense {
  expenseDate: string;
  amount: number;
  description: string;
  userId: string;
  categoryId: Types.ObjectId;
}

export interface ITransfer {
  transferDate: string;
  amount: number;
  transferFrom: string;
  transerTo: string;
  type: string;
  userId: 10;
}
