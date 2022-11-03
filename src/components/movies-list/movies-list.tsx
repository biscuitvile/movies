import { Component, State, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'movies-list',
  shadow: true,
})
export class MoviesList {
  render() {
    return <ul>
      { state.movies.map((movie) =>
        <li>{movie}</li>
       ) }
     </ul>
  }
}
