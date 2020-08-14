const initialState = {
  books: [],
  loading: false,
  ids:[]
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BOOKS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOOKS_SUCCESS":
      return {
        books: action.payload,
        loading: false,
        ids:[]
      };
    case "GET_BOOKS_ERROR":
      return {
        books: action.payload,
        loading: false,
      };

    case "TOGGLE_FAVORITES":
      return {
        ids:action.payload,
        ...state
      };

    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default booksReducer;
