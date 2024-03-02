import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  movie!:any
ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['id']
  this.mainService.getMovieById(id).subscribe((res)=>{
    this.movie = res;
    console.log(res)
  })
}
activatedRoute:ActivatedRoute = inject(ActivatedRoute)
mainService = inject(MainServiceService)
}
