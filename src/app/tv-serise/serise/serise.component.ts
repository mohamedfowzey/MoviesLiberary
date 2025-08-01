import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainServiceService } from '../../main-service.service';


@Component({
  selector: 'app-serise',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './serise.component.html',
  styleUrl: './serise.component.css'
})
export class SeriseComponent {
  service = inject(MainServiceService)
@Input()serise: any;

}
