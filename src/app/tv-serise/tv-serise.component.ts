import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { MovieComponent } from "../movies/movie/movie.component";
import { NgFor } from '@angular/common';
import { SeriseComponent } from './serise/serise.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-tv-serise',
    standalone: true,
    templateUrl: './tv-serise.component.html',
    styleUrl: './tv-serise.component.css',
    imports: [MovieComponent, NgFor,NgIf, SeriseComponent]
})
export class TvSeriseComponent {
  pageIndex:number = 1;
  serises:any
loading: boolean = true;
  constructor(private service:MainServiceService){
    service.getTvSeriese().subscribe(res=>{
      //@ts-ignore
      this.serises = res['results'];
      //@ts-ignore
      console.log(res['results']);
      
    },rej=>this.loading = false);
    // pageIndex:Number = 1;
    window.addEventListener('scrollend',()=>{
      this.pageIndex++
      //@ts-ignore
      this.service.getTvSeriese(this.pageIndex).subscribe(res=>{this.serises = [...this.serises,...res['results']]})
    });
  }
}