import { Component, State, h } from '@stencil/core';

type Movie = {
  title: string
}

@Component({
  tag: 'movies-list',
  shadow: true,
})
export class MoviesList {
  @State() movies: Array<Movie> = [];
  newMovieInput!: HTMLInputElement;

  addMovie() {
    let title: string = this.newMovieInput.value;
    this.newMovieInput.value = "";

    this.movies = [
      ...this.movies,
      { title: title }
    ]

    this.newMovieInput.focus();
  }


  render() {
    return <div>
      <ul>
        { this.movies.map((movie) =>
          <li>{movie.title}</li>
        ) }
      </ul>
      <input type="text"
        autofocus
        ref={ (el) => this.newMovieInput = el as HTMLInputElement }
      ></input>

      <button type="submit" onClick={ () => this.addMovie() }>Add</button>
    </div>
  }
}
