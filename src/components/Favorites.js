import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as booksActions from "../actions/booksActions";
import { AiFillStar } from "react-icons/ai";

const Favorites = () => {
  let ids = useSelector((state) => state.ids);
  let books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [color, setColor] = useState("#fbfb00");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let favorites = books.filter((book) => ids.indexOf(book.id) !== -1);

  const toggleColor = () => {
    if (color === "#eee") {
      setColor("#fbfb00");
    } else {
      setColor("#eee");
    }
  };

  return (
    <section className="section-favorites container">
      <h1>Favorites</h1>
      {favorites.map((favorite, i) => (
        <div key={`${i}_${favorite.volumeInfo.title}`}>
          <article className="book-item">
            <div>
              <h2>{favorite.volumeInfo.title}</h2>
              <p>{favorite.volumeInfo.description}</p>
              <AiFillStar
                className={
                  ids.includes(favorite.id) ? "star star-favorite" : "star"
                }
                onClick={() => {
                  booksActions.toggleFavoriteIds(i, ids, favorites, dispatch);
                  toggleColor();
                }}
              />
              <Link className="m-1" to={`details/${favorite.id}`}>
                Read more
              </Link>
            </div>

            <div>
              <img src={favorite.volumeInfo.imageLinks.thumbnail} alt="book" />
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Favorites;
