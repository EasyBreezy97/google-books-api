import axios from "axios";

export function loading() {
  return { type: "LOADING" };
}

export const fetchBooksAsync = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_BOOKS_REQUEST" });

    let books = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=subject:science",
    );

    return await dispatch({
      type: "GET_BOOKS_SUCCESS",
      payload: books.data.items,
    });
  } catch (error) {
    return await dispatch({ type: "GET_BOOKS_ERROR", payload: error });
  }
};

export const toggleFavoriteIds = (index, ids, books, dispatch) => {
  if (!ids.includes(books[index].id)){
    ids.push(books[index].id)
  }
  else {
    let itemIndex = ids.indexOf(books[index].id);
    ids.splice(itemIndex, 1);
  }
  console.log("ids::",ids)
  return dispatch({ type: "TOGGLE_FAVORITES", payload: ids });
};
