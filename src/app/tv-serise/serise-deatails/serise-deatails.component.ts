import { Component, inject } from '@angular/core';
import { MainServiceService } from '../../main-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serise-deatails',
  standalone: true,
  imports: [],
  templateUrl: './serise-deatails.component.html',
  styleUrl: './serise-deatails.component.css'
})
export class SeriseDeatailsComponent {
  serise:any;
  service = inject(MainServiceService)
constructor(private activatedRoute:ActivatedRoute) {
  const id =activatedRoute.snapshot.params['id']
  this.service.getTVSerieseById(id)
  .subscribe(res=>this.serise = res)
}
}
