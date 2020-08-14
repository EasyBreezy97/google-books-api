import React from "react";

const BookDetail = ({ book }) => {
  return (
    <>
      <article className="book-details">
        <h2 className="my-1 book-details-heading">{book.volumeInfo.title}</h2>
        <img
          className="book-details-img"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="book"
        />
        <div className="book-info">
          <a href={book.volumeInfo.previewLink} target="blank">
            Book Preview
          </a>
          <p>Page Count: {book.volumeInfo.pageCount}</p>
          <p>Publish Date: {book.volumeInfo.publishedDate}</p>
          {book.volumeInfo.authors ? (
            <p>Authors: {book.volumeInfo.authors.join()}</p>
          ) : null}
        </div>
        <p className="my-2">{book.volumeInfo.description}</p>
      </article>
    </>
  );
};

export default BookDetail;
