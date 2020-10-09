import { Schema, model, Document, Types } from 'mongoose';
import { types } from 'util';

interface TransferDoc extends Document {
  transferDate: Date;
  amount: number;
  transferFrom: Types.ObjectId;
  transferTo: Types.ObjectId;
  type: string;
  userId: string;
  userAccountId: number;
}

const transferSchema = new Schema(
  {
    amount: { type: Number, required: true },
    transferDate: { type: Date, required: true },
    transferFrom: { type: Types.ObjectId },
    transferTo: { type: Types.ObjectId },
    type: { type: String },
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

export default model<TransferDoc>('Transfer', transferSchema);
