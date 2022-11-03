import { Component, Host, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'movies-list',
  shadow: true,
})
export class MoviesList {

  render() {
    return <Host>
      { state.movies.map((movie) => {
        return <movie-list-item movie={movie}></movie-list-item>
       })
      }
     </Host>
  }
}
