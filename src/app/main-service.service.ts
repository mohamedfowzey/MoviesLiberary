import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  http:HttpClient = inject(HttpClient);
  private apiKey='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQzNmRmNDE5Yjg0NWI3ZWY5MWYyMjVkY2ZiOTljMyIsInN1YiI6IjY1YjgxNzg5ODU2NmQyMDE4NjZiM2UwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MMlM2AvT--GDz95SluU0YdAn6EU0sH-JYPQqSvi1qDY'
  base = 'https://api.themoviedb.org/3';
  mediaBase = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'; 
  getApiKey() {
    return this.apiKey
  }
  getMovieById(id: any):Observable<any> {
    return this.http.get(`${this.base}/movie/${id}`,{
      headers:{
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`
          }
    })
  }
  getTVSerieseById(id:number){
    return this.http.get(`${this.base}/tv/${id}`,{
      headers:{
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`
          }
    })
  }
  
  getMovies(page:number=1): Observable<any> {
    
   return this.http.get(`${this.base}/discover/movie?page=${page}`,{
    headers:{
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`
        }
  })
  }
  getTvSeriese(pageIndex:number = 1){
    return this.http.get(`${this.base}/discover/tv?page=${pageIndex}`,{headers:{
      accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`
    }})
  }
  getPlayingNowTV(pageIndex:number){
    return this.http.get(`${this.base}/movie/now_playing?page=${pageIndex}`,{
      headers:{
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`
          }
    })
  }
  getPlayingNowMovies(pageIndex:number){
    return this.http.get(`${this.base}/movie/now_playing?page=${pageIndex}`,{
      headers:{
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`
          }
    })
  }
  getPopularTV(pageIndex:number){}
  getPopularMovies(pageIndex:number){}
  getTopRatedTV(pageIndex:number){}
  getTopRatedMovies(pageIndex:number){}
  getUpcommingTv(pageIndex:number){}
  getUpcommingMovies(pageIndex:number){
    return this.http.get(`${this.base}/movie/now_playing?page=${pageIndex}`,{
      headers:{
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`
          }
    })
  }
}