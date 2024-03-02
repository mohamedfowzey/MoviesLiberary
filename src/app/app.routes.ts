import { Routes } from '@angular/router';
import { HomeComponent } from '../../../movies/src/app/home/home.component';
import { DetailsComponent } from '../../../movies/src/app/details/details.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
];
