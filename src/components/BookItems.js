import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as booksActions from "../actions/booksActions";
import { AiFillStar } from "react-icons/ai";
import Spinner from "./Spinner";

const BookItems = () => {
  let books = useSelector((state) => state.books);
  let loading = useSelector((state) => state.loading);
  let ids = useSelector((state) => state.ids);
  const dispatch = useDispatch();
  const [color, setColor] = useState("#eee");

  useEffect(() => {
    window.scroll(0, 0);
    if (!books.length) {
      dispatch(booksActions.fetchBooksAsync());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleColor = () => {
    if (color === "#eee") {
      setColor("#fbfb00");
    } else {
      setColor("#eee");
    }
  };
  return (
    <section className="my-5">
      {loading ? (
        <Spinner />
      ) : (
        books.map((book, i) => (
          <div key={`${i}_${book.volumeInfo.title}`}>
            <h2>{book.volumeInfo.title}</h2>
            <article className="book-item">
              <div>
                <p>{book.volumeInfo.description}</p>
                <AiFillStar
                  style={{ color: `${color}` }}
                  className={
                    ids.includes(book.id)
                      ? "star star-favorite"
                      : "star star-grey"
                  }
                  onClick={() => {
                    booksActions.toggleFavoriteIds(i, ids, books, dispatch);
                    toggleColor();
                  }}
                />
                <Link className="m-1" to={`details/${book.id}`}>
                  Read more
                </Link>
              </div>
              <div>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
              </div>
            </article>
          </div>
        ))
      )}
    </section>
  );
};

export default BookItems;
