import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  movies: []
});

onChange('movies', value => {
  window.localStorage.setItem("movies", JSON.stringify(value));
});

export default state;
