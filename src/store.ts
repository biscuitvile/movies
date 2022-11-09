import { createStore } from "@stencil/store";

/**
 * a comment that starts with two stars becomes a jsdoc comment
 * that's visible when you look at the the type of something
 * https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
 */
export type Movie = { title: string, year: string, isEditing: boolean };

type State = {
  movies: Movie[]
}

const { state, onChange } = createStore<State>({
  movies: []
});

onChange('movies', value => {
  window.localStorage.setItem("movies", JSON.stringify(value));
});

export default state;
