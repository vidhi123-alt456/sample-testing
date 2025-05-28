using Book_Management.DataAccessLayer.Models;
using Book_Management.BusinessLogic.Services;
using Microsoft.AspNetCore.Mvc;

namespace Book_Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookService _bookService;

        public BooksController(BookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet("GetAllBooks")]
        public ActionResult<List<Book>> GetAllBooks()
        {
            var books = _bookService.GetBooks();
            return books == null || books.Count == 0 ? NotFound("No books found") : Ok(books);
        }

        [HttpGet("GetSingleBooks")]
        public ActionResult<Book> GetBook(int id)
        {
            var book = _bookService.GetBookById(id);
            return book == null ? NotFound("Book Not Found") : Ok(book);
        }

        [HttpPost]
        public ActionResult AddBook(Book book)
        {
            _bookService.AddBook(book);
            return Ok("Book added successfully");
        }

        [HttpPut]
        public ActionResult UpdateBook(Book bookToBeUpdated)
        {
            int status = _bookService.UpdateBook(bookToBeUpdated);
            return status switch
            {
                -1 => NotFound("Book Not Found"),
                1 => Ok("Book Updated successfully"),
                _ => BadRequest("Bad Request")
            };
        }

        [HttpDelete]
        public ActionResult DeleteBook(int id)
        {
            int status = _bookService.DeleteBook(id);
            return status switch
            {
                -1 => NotFound("Book Not Found"),
                1 => Ok("Book Deleted Successfully"),
                _ => BadRequest("Bad Request")
            };
        }
    }
}

