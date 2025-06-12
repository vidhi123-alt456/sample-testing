using BooksApi.Entities.Entities;
using BooksApi.Entities.Repositories.Interface;
using BooksApi.Models;
using BooksApi.Services.Services.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BooksApi.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;

        public BookService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task AddBook(BookDetails bookDetails)
        {
            await _bookRepository.InsertBook(bookDetails);
        }

        public async Task UpdateBook(BookDetails bookDetails)
        {
            await _bookRepository.UpdateBook(bookDetails);
        }

        public async Task<List<BookDetails>> GetAllBooksAsync()
        {
            return await _bookRepository.GetAllAsync();
        }

        public async Task<BookDetails?> GetBookDetailsByIdAsync(int id)
        {
            return await _bookRepository.GetByIdAsync(id);
        }
    }
}
