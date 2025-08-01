import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { MovieComponent } from "./movie/movie.component";
import { NgFor, NgIf } from '@angular/common';
import { Movie } from '../movie';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [MovieComponent,NgFor,NgIf]
})
export class MoviesComponent {
  loading:boolean = true;
  moviesList:any=[];
  constructor(private mainService:MainServiceService){
    this.mainService.getMovies(this.pageindex).subscribe(res=>this.moviesList = res.results,err=>{console.log(err);this.loading = false});
    window.addEventListener('scrollend',()=>{
      this.pageindex += 1;
      this.mainService.getMovies(this.pageindex)
      .subscribe(res=>{this.moviesList = [...this.moviesList,...res.results];
        console.log(res)},res=>{this.loading = false});
  })
  }
  pageindex=1;
}