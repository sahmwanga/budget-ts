import { Schema, model, Document, Types } from 'mongoose';

interface BudgetDoc extends Document {
  categoryId: Types.ObjectId;
  amount: number;
  budgetDate: Date;
  recurring: boolean;
  recurringDate: Date;
  userAccountId: number;
  userId: string;
}

const budgetSchema = new Schema(
  {
    categoryId: { type: Types.ObjectId, ref: 'Category' },
    amount: { type: Number, required: true },
    budgetDate: { type: Date, required: true },
    recurring: { type: Boolean },
    recurringDate: { type: Date },
    userAccountId: { type: Number },
    userId: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export default model<BudgetDoc>('Budget', budgetSchema);
