import Author, { IAuthor } from "../schemas/authorSchema";

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
}

const authorService = new AuthorService();

export default authorService;
