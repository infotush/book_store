import Author, { IAuthor } from "../../../models/authorModel";

class AuthorService {
  async getAuthors() {
    try {
      const authors = await Author.find({});
      return authors;
    } catch (e) {
      throw new Error(`Author cannot be retrieved ${e}`);
    }
  }
  async createAuthor(data: IAuthor) {
    try {
      const { fullName, bio, books } = data;
      const newAuthor = {
        fullName,
        bio,
        books,
        createdAt: new Date(),
      };
      const author = await new Author(newAuthor).save();
      return author;
    } catch (e) {
      throw new Error(`Author cannot be added ${e}`);
    }
  }
  async getAuthorById(id: string) {
    try {
      const author = await Author.findById(id);
      return author;
    } catch (e) {
      throw new Error(`Author cannot be retrieved ${e}`);
    }
  }
  async deleteAuthor(id: string) {
    try {
      return await Author.deleteOne({ _id: id });
    } catch (e) {
      throw new Error(`Author cannot be deleted ${e}`);
    }
  }
  async updateAuthor(id: string, data: IAuthor) {
    try {
      const { fullName, bio, books } = data;

      const author = await Author.updateOne(
        { _id: id },
        { fullName, bio, books, updatedAt: new Date() }
      );
      return author;
    } catch (e) {
      throw new Error(`Author cannot be updated ${e}`);
    }
  }
}

const authorService = new AuthorService();

export default authorService;
