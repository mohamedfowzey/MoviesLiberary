import { Component } from '@angular/core';
import { MainServiceService } from '../../main-service.service';
import { NgFor, NgIf } from '@angular/common';
import { MovieComponent } from "../movie/movie.component";

@Component({
    selector: 'app-upcomming',
    standalone: true,
    templateUrl: './upcomming.component.html',
    styleUrl: './upcomming.component.css',
    imports: [NgIf, NgFor, MovieComponent]
})
export class UpcommingComponent {
  loading:boolean = true;
  moviesList:any=[];
  constructor(private mainService:MainServiceService){
    this.mainService.getMovies().subscribe(res=>this.moviesList = res.results,err=>{console.log(err);this.loading = false});
    window.addEventListener('scrollend',()=>{
      this.pageindex += 1;
      this.mainService.getMovies(this.pageindex)
      .subscribe(res=>{this.moviesList = [...this.moviesList,...res.results];
        console.log(res)},res=>{this.loading = false});
  })
  }
  pageindex=1;
}
