using BooksApi.Entities.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BooksApi.Entities.Repositories.Interface
{
    public interface IBookRepository
    {
        Task InsertBook(BookDetails bookDetails);
        Task UpdateBook(BookDetails bookDetails);
        Task<BookDetails?> GetByIdAsync(int id);
        Task<List<BookDetails>> GetAllAsync();
    }
}
