import { Component, inject } from '@angular/core';
import { MovieComponent } from "../movie/movie.component";
import { NgFor, NgIf } from '@angular/common';
import { MainServiceService } from '../../main-service.service';

@Component({
    selector: 'app-playingnow',
    standalone: true,
    templateUrl: './playingnow.component.html',
    styleUrl: './playingnow.component.css',
    imports: [MovieComponent,NgFor,NgIf]
})
export class PlayingnowComponent {
  loading:boolean = true;
  moviesList:any=[];
  constructor(private mainService:MainServiceService){
    this.mainService.getMovies().subscribe(res=>this.moviesList = res.results,err=>{console.log(err);this.loading = false});
    window.addEventListener('scrollend',()=>{
      this.pageindex += 1;
      this.mainService.getPlayingNowMovies(this.pageindex)
      //@ts-ignore
      .subscribe(res=>{this.moviesList = [...this.moviesList,...res.results];
        console.log(res)},res=>{this.loading = false});
  })
  }
  pageindex=1;
}
