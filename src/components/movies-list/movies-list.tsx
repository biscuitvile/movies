import { Component, Host, h } from '@stencil/core';
import state from '../../store';

type Movie = { title: string, year: string, isEditing: boolean };

@Component({
  tag: 'movies-list',
  shadow: true,
})
export class MoviesList {

  componentDidLoad() {
    let movies = JSON.parse(window.localStorage.getItem("movies")) || [] as Array<Movie>;
    state.movies = movies;
  }

  movies() {
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

  render() {
    return <Host>
      { this.movies().map((movie) => {
        return <movie-list-item movie={movie}></movie-list-item>
       })
      }
     </Host>
  }
}
