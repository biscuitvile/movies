import { Component, Host, h } from '@stencil/core';
import state from '../../store';

type Movie = { title: string, isEditing: boolean };

@Component({
  tag: 'movies-list',
  shadow: true,
})
export class MoviesList {

  componentDidLoad() {
    let movies = JSON.parse(window.localStorage.getItem("movies")) || [] as Array<Movie>;
    state.movies = movies;
  }

  render() {
    return <Host>
      { state.movies.map((movie) => {
        return <movie-list-item movie={movie}></movie-list-item>
       })
      }
     </Host>
  }
}
