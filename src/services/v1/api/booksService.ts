import Book, { IBook } from "../../../models/bookModel";

class BookService {
  async getBooks() {
    try {
      const books = await Book.find({});
      return books;
    } catch (e) {
      throw new Error(`Books cannot be retrieved ${e}`);
    }
  }
  async createBook(data: IBook) {
    try {
      const { name, description, authors } = data;
      const newBook = {
        name,
        description,
        authors,
        createdAt: new Date(),
      };
      const book = await new Book(newBook).save();
      return book;
    } catch (e) {
      throw new Error(`Author cannot be added ${e}`);
    }
  }
}

const booksService = new BookService();

export default booksService;
