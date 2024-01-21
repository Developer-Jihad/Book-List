import React, { useState, useEffect } from "react";
import BookRow from "./Components/BookRow/BookRow";
import { getDataFromLocalStorage } from "./Components/utils.js";

export const App = () => {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState(getDataFromLocalStorage());

  // input field states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubYear, setPubYear] = useState("");

  // Clear Inputs
  const clearInputs = () => {
    setAuthor("");
    setIsbn("");
    setPubYear("");
    setTitle("");
  };

  // form submit event
  const hadleSubmit = (e) => {
    e.preventDefault();

    const book = {
      title,
      author,
      isbn,
      pubYear,
    };
    setBooks([...books, book]);
    console.log(books);
    clearInputs();
  };
  // delete book from LS
  const deleteBook = (isbn) => {
    const filteredBook = books.filter((book) => book.isbn !== isbn);
    setBooks(filteredBook);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("book", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <form onSubmit={hadleSubmit} className="form-group">
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Author</label>
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>ISBN#</label>
            <input
              type="text"
              onChange={(e) => setIsbn(e.target.value)}
              value={isbn}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Publish Year</label>
            <input
              type="text"
              onChange={(e) => setPubYear(e.target.value)}
              value={pubYear}
              className="form-control"
              required
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        {books.length ? (
          <div className="view-container">
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ISBN#</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Published</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <BookRow
                        key={book.isbn}
                        book={book}
                        deleteBook={deleteBook}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => setBooks([])}
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default App;
