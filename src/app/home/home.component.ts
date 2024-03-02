import { Component, inject } from '@angular/core';
import {NgClass}  from '@angular/common';
import { RouterLink } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,RouterLink,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mainService: MainServiceService = inject(MainServiceService);
  viewList:any = [];
isVisible: boolean = false;
  constructor(){
    this.mainService.getMovies().then(res=>{
      this.viewList = res.results;
      console.log(res.results);
    })
  }
}
