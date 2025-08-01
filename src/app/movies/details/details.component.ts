import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../../main-service.service';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  http = inject(HttpClient);
  sevice = inject(MainServiceService);
  movie!: any;
  images!: any[];
  watchProviders!: any[];
  reviews!: any[];
  similar!: any[];

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    const movieORserise: String = this.activatedRoute.snapshot.params['type'];
    if (movieORserise === 'movie') {
      this.mainService.getMovieById(id).subscribe((res) => {
        this.movie = res;
        console.log(res)
      });
      //@ts-ignore
      this.http
        .get(`https://api.themoviedb.org/3/movie/${id}/images`, {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            //@ts-ignore
            Authorization: `Bearer ${this.sevice.getApiKey()}`,
          },
        })
        .subscribe((res) => {
          //@ts-ignore
          this.images = res['backdrops'];
          console.log(this.images)
        });
      
      this.http
        .get(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `bearer ${this.sevice.getApiKey()}`,
          },
        })
        .subscribe((res) => {
          
        //@ts-ignore
          this.watchProviders = res['results'];
          //@ts-ignore
          console.log(res['results'])
        });
    } else {
      this.mainService.getTVSerieseById(id).subscribe((res) => {
        this.movie = res;
      });
      //@ts-ignore
      this.http
        .get(`https://api.themoviedb.org/3/tv/${id}/images`, {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            //@ts-ignore
            Authorization: `Bearer ${this.sevice.getApiKey()}`,
          },
        })
        .subscribe((res) => {
          //@ts-ignore
          this.images = res['backdrops'];
          console.log(this.images)
        });
    }
  }
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  mainService = inject(MainServiceService);
}
