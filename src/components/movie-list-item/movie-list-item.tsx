import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'movie-list-item',
  shadow: true,
})
export class MovieListItem {
  @Prop({ mutable: true }) movie: { title: string, year: string, isEditing: boolean }
  newMovieTitleInput!: HTMLInputElement;
  newMovieYearInput!: HTMLInputElement;

  setEditing() {
    this.movie = {
      ...this.movie,
      isEditing: true
    }
  }

  save() {
    this.movie = {
      ...this.movie,
      title: this.newMovieTitleInput.value,
      year: this.newMovieYearInput.value,
      isEditing: false
    }
  }

  render() {
    if (this.movie.isEditing) {
      return <li><input type="text" value={this.movie.title}
        ref={ (el) => this.newMovieTitleInput = el as HTMLInputElement }></input>
        <input type="text" value={this.movie.year}
        ref={ (el) => this.newMovieYearInput = el as HTMLInputElement }></input>
        <button onClick={ () => this.save() }>Save</button></li>
    } else {
      return <li>{this.movie.title} ({this.movie.year})<a href="javascript:void(0)" onClick={ () => this.setEditing() }>Edit</a></li>
    }
  }
}
