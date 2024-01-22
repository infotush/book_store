import mongoose, { Schema } from 'mongoose';

export interface IAuthor {
    fullName: string,
    bio: string,
    books: string[]
}

const author = new Schema<IAuthor>({
    fullName: { type: String, required: true },
    bio: { type: String, required: true },
    books: { type: [String], required: true }
})

const Author = mongoose.model('Author', author);

export default Author