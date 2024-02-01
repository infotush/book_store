import mongoose, { Schema, Types } from "mongoose";

export interface IReview {
  bookId: Types.ObjectId;
  userId: Types.ObjectId;
  ratings: string;
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const review = new Schema<IReview>({
  bookId: { type: Schema.Types.ObjectId, ref: "books", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
  ratings: { type: String, required: true },
  comments: { type: [String], required: true },
  createdAt: { type: Date, default: null },
  updatedAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

const Review = mongoose.model("Reviews", review);

export default Review;
