using BooksApi.Entities.Context;
using BooksApi.Entities.Entities;
using BooksApi.Entities.Repositories.Interface;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BooksApi.Entities.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly BookDbContext _dbContext;

        public BookRepository(BookDbContext bookDbContext)
        {
            _dbContext = bookDbContext;
        }

        public async Task InsertBook(BookDetails bookDetails)
        {
            await _dbContext.BookDetails.AddAsync(bookDetails);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateBook(BookDetails bookDetails)
        {
            var existingBook = await _dbContext.BookDetails.FindAsync(bookDetails.Id);
            if (existingBook != null)
            {
                existingBook.Title = bookDetails.Title;
                existingBook.Description = bookDetails.Description;
                existingBook.Author = bookDetails.Author;
                _dbContext.BookDetails.Update(existingBook);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task<BookDetails?> GetByIdAsync(int id)
        {
            return await _dbContext.BookDetails.FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<List<BookDetails>> GetAllAsync()
        {
            return await _dbContext.BookDetails.ToListAsync();
        }
    }
}
