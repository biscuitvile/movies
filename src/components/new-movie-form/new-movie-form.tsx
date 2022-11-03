import { Component, Host, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'new-movie-form',
  shadow: true,
})
export class NewMovieForm {
  newMovieInput!: HTMLInputElement;

  addMovie() {
    let title: string = this.newMovieInput.value;
    this.newMovieInput.value = "";

    state.movies = [
      ...state.movies,
      title
    ]

    this.newMovieInput.focus();
  }

  render() {
    return <Host>
      <input type="text"
        autofocus
        ref={ (el) => this.newMovieInput = el as HTMLInputElement }></input>

      <button type="submit" onClick={ () => this.addMovie() }>Add</button>
    </Host>
  }
}