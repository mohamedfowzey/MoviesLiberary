import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
getApiKey() {
  return this.apiKey
}
  http:HttpClient = inject(HttpClient);
  private apiKey='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQzNmRmNDE5Yjg0NWI3ZWY5MWYyMjVkY2ZiOTljMyIsInN1YiI6IjY1YjgxNzg5ODU2NmQyMDE4NjZiM2UwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MMlM2AvT--GDz95SluU0YdAn6EU0sH-JYPQqSvi1qDY'
  base = 'https://api.themoviedb.org/3';
  mediaBase = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'; 
  getMovieById(id: any):Observable<any> {
    return this.http.get(`${this.base}/movie/${id}`,{
      headers:{
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`
          }
    })
  }
  async getMovies(): Promise<any> {
    const data = await fetch(this.base+"/discover/movie", {method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQzNmRmNDE5Yjg0NWI3ZWY5MWYyMjVkY2ZiOTljMyIsInN1YiI6IjY1YjgxNzg5ODU2NmQyMDE4NjZiM2UwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MMlM2AvT--GDz95SluU0YdAn6EU0sH-JYPQqSvi1qDY'
    }})
    return await data.json()
  }
}