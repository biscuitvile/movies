import { Component, Host, h } from '@stencil/core';
import { sortedMovies } from '../../store';

@Component({
  tag: 'movies-list',
  shadow: true,
})
export class MoviesList {
  render() {
    return <Host>
      { sortedMovies().map((movie) => {
        return <movie-list-item movie={movie}></movie-list-item>
       })
      }
     </Host>
  }
}
