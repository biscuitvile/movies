import { createStore } from "@stencil/store";

const { state } = createStore({
  movies: []
});

export default state;
