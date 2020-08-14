import React, { useEffect } from "react";
import BookDetail from "./BookDetail";
import { useSelector, useDispatch } from "react-redux";
import * as booksActions from "../actions/booksActions";

const Details = ({ match }) => {
  let books = useSelector((state) => state.books);
  let selectedBook = books.filter((book) => book.id === match.params.bookId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!books.length) dispatch(booksActions.fetchBooksAsync());

    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="container section-details py-4">
        <h2>Details</h2>
        {selectedBook.map((book, i) => (
          <BookDetail book={book} key={`${i}_${book.id}`} />
        ))}
      </section>
    </>
  );
};

export default Details;
