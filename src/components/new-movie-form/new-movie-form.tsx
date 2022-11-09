import { Component, Host, h } from '@stencil/core';
import { addMovie } from '../../store';

function getAndClearValueFromInput(ref: HTMLInputElement): string {
  let value: string = ref.value;
  ref.value = "";
  return value;
}

@Component({
  tag: 'new-movie-form',
  shadow: true,
})
export class NewMovieForm {
  newMovieTitleInput!: HTMLInputElement;
  newMovieYearInput!: HTMLInputElement;

  addMovie() {
    addMovie(
      getAndClearValueFromInput(this.newMovieTitleInput),
      getAndClearValueFromInput(this.newMovieYearInput)
    );

    this.newMovieTitleInput.focus();
  }

  render() {
    return <Host>
      <input type="text"
        autofocus
        ref={ (el: HTMLInputElement) => this.newMovieTitleInput = el }></input>

      <input type="text"
        ref={ (el: HTMLInputElement) => this.newMovieYearInput = el }></input>

      <button type="submit" onClick={ () => this.addMovie() }>Add</button>
    </Host>
  }
}
