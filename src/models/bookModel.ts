import mongoose, { Schema } from "mongoose";

export interface IBook {
  name: string;
  description: string;
  authors: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const book = new Schema<IBook>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  authors: { type: [String], required: true },
  createdAt: { type: Date, default: null },
  updatedAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

const Book = mongoose.model("Books", book);

export default Book;
