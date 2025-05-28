using Book_Management.DataAccessLayer.Models;

namespace Book_Management.BusinessLogic.Services
{
    public class BookService
    {
        private List<Book> books;

        public BookService()
        {
            books = new List<Book>()
            {
                new Book { ID = 1, Title = "Test1", Author = "James Bond", Genre = "Fiction" },
                new Book { ID = 2, Title = "Test2", Author = "Ruskin Bond", Genre = "Non Fiction" },
                new Book { ID = 3, Title = "Test3", Author = "Japan Bond", Genre = "Fiction" }
            };
        }

        public List<Book> GetBooks() => books;

        public Book? GetBookById(int id) =>
            books.FirstOrDefault(book => book.ID == id);

        public void AddBook(Book book)
        {
            book.ID = books.Count + 1;
            books.Add(book);
        }

        public int UpdateBook(Book book)
        {
            var bookToUpdate = GetBookById(book.ID);
            if (bookToUpdate == null) return -1;

            bookToUpdate.Title = book.Title;
            bookToUpdate.Author = book.Author;
            bookToUpdate.Genre = book.Genre;
            return 1;
        }

        public int DeleteBook(int id)
        {
            var bookToRemove = GetBookById(id);
            if (bookToRemove == null) return -1;

            books.Remove(bookToRemove);
            return 1;
        }
    }
}
