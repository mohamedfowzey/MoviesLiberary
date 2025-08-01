import { AfterViewInit, Component, Input, inject } from '@angular/core';
import { Movie } from '../../movie';
import { MainServiceService } from '../../main-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  service = inject(MainServiceService)
  @Input() movie! :Movie;
  
}
