import { createStore } from "@stencil/store";
import { object, string, boolean, array, DecoderType } from "decoders";

const decodeMovieJson = object({
  title: string,
  year: string,
  isEditing: boolean
});

/**
 * a comment that starts with two stars becomes a jsdoc comment
 * that's visible when you look at the the type of something
 * https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
 */
export type Movie = DecoderType<typeof decodeMovieJson>;

const decodeMoviesJson = array(decodeMovieJson)

type State = {
  movies: Movie[]
}

const { state, onChange } = createStore<State>({
  movies: []
});

export function addMovie(title: string, year: string) {
  state.movies = [
    ...state.movies,
    { title: title, year: year, isEditing: false }
  ]
}

// TODO explore whether it makes sense to memoize this in any way and
// how that could generalized and made not shitty to do as an API.
export function sortedMovies(): Movie[] {
  return state.movies.sort((a: Movie, b: Movie): number => {
    if ((a.year > b.year)) {
      return 1
    } else {
      if (a.year === b.year) {
        return (a.title > b.title) ? 1 : -1;
      } else {
        return -1
      }
    }
  });
}

onChange('movies', value => {
  window.localStorage.setItem("movies", JSON.stringify(value));
});

let movies = decodeMoviesJson.decode(JSON.parse(window.localStorage.getItem("movies")));

if (movies.ok) {
  state.movies = movies.value
};

export default state;
