import mongoose, { Schema } from "mongoose";

export interface IAuthor {
  fullName: string;
  bio: string;
  books: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const author = new Schema<IAuthor>({
  fullName: { type: String, required: true },
  bio: { type: String, required: true },
  books: { type: [String], required: true },
  createdAt: { type: Date, default: null },
  updatedAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

const Author = mongoose.model("Author", author);

export default Author;
