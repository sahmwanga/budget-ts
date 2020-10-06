import { Schema, model, Document } from 'mongoose';

interface CategoryDoc extends Document {
  name: string;
  description: string;
  userId: string;
}

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
    },
    description: { type: String },
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

export default model<CategoryDoc>('Category', categorySchema);
