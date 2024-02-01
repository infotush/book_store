import mongoose, { Schema, Types } from "mongoose";

export interface IReviewEvent {
  eventType: string;
  bookId: Types.ObjectId;
  userId: Types.ObjectId;
  ratings: string;
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const reviewEvent = new Schema<IReviewEvent>({
  eventType: { type: String, required: true },
  bookId: { type: Schema.Types.ObjectId, ref: "books", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
  ratings: { type: String, required: true },
  comments: { type: [String], required: true },
  createdAt: { type: Date, default: null },
  updatedAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

const ReviewEvent = mongoose.model("ReviewEvent", reviewEvent);

export default ReviewEvent;
