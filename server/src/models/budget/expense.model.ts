import { Schema, model, Document, Types } from 'mongoose';

interface ExpenseDoc extends Document {
  expenseDate: Date;
  amount: number;
  description: string;
  categoryId: Types.ObjectId;
  userId: string;
}

const expenseSchema = new Schema(
  {
    expenseDate: Date,
    amount: Number,
    description: String,
    categoryId: { type: Types.ObjectId, ref: 'Category' },
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

export default model<ExpenseDoc>('Expense', expenseSchema);
