using BooksApi.Entities.Entities;
using BooksApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BooksApi.Services.Services.Interface
{
    public interface IBookService
    {
        Task AddBook(BookDetails bookDetails);
        Task UpdateBook(BookDetails bookDetails);
        Task<List<BookDetails>> GetAllBooksAsync();
        Task<BookDetails?> GetBookDetailsByIdAsync(int id);
    }
}
