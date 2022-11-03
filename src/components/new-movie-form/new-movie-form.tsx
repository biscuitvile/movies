import { Component, Host, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'new-movie-form',
  shadow: true,
})
export class NewMovieForm {
  newMovieTitleInput!: HTMLInputElement;
  newMovieYearInput!: HTMLInputElement;

  addMovie() {
    let title: string = this.newMovieTitleInput.value;
    let year: string = this.newMovieYearInput.value;
    this.newMovieTitleInput.value = "";
    this.newMovieYearInput.value = "";

    state.movies = [
      ...state.movies,
      { title: title, year: year, isEditing: false }
    ]

    this.newMovieTitleInput.focus();
  }

  render() {
    return <Host>
      <input type="text"
        autofocus
        ref={ (el) => this.newMovieTitleInput = el as HTMLInputElement }></input>

      <input type="text"
        ref={ (el) => this.newMovieYearInput = el as HTMLInputElement }></input>

      <button type="submit" onClick={ () => this.addMovie() }>Add</button>
    </Host>
  }
}
