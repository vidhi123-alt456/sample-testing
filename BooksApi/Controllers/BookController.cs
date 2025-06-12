using BooksApi.Entities.Entities;
using BooksApi.Models;
using BooksApi.Services.Services.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BooksApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpPost]
        [Route("Add")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddBook([FromBody] BookDetails bookDetails)
        {
            var existing = await _bookService.GetBookDetailsByIdAsync(bookDetails.Id);
            if (existing != null)
            {
                return BadRequest("Book with this ID already exists.");
            }

            await _bookService.AddBook(bookDetails);
            return Ok("Book created!");
        }

        [HttpPost]
        [Route("Edit")]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> EditBook([FromBody] BookDetails bookDetails)
        {
            var existing = await _bookService.GetBookDetailsByIdAsync(bookDetails.Id);
            if (existing == null)
            {
                return NotFound("Book not found.");
            }

            await _bookService.UpdateBook(bookDetails);
            return Ok("Book updated.");
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var books = await _bookService.GetAllBooksAsync();
            return Ok(books);
        }

        [HttpGet]
        [Route("GetById")]
        public async Task<IActionResult> GetById(int id)
        {
            var book = await _bookService.GetBookDetailsByIdAsync(id);
            if (book == null)
                return NotFound("Book not found.");

            return Ok(book);
        }
    }
}
