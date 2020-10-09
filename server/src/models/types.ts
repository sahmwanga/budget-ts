import { Types } from 'mongoose';

export interface ICategory {
  name: string;
  description: string;
  userId: string;
}

export interface IBudget {
  categoryId: Types.ObjectId;
  amount: number;
  budgetDate: Date;
  recurring: boolean;
  recurringDate: Date;
  userAccountId: number;
  userId: string;
}

export interface IExpense {
  expenseDate: Date;
  amount: number;
  description: string;
  userId: string;
  categoryId: Types.ObjectId;
}

export interface ITransfer {
  transferDate: Date;
  amount: number;
  transferFrom: Types.ObjectId;
  transferTo: Types.ObjectId;
  type: string;
  userId: string;
  userAccountId: number;
}
