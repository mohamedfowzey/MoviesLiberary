import { Routes } from '@angular/router';
// import { HomeComponent } from '../../../movies/src/app/home/home.component';
import { DetailsComponent } from './movies/details/details.component';
import { MoviesComponent } from './movies/movies.component';
import { TvSeriseComponent } from './tv-serise/tv-serise.component';
import { SeriseDeatailsComponent } from './tv-serise/serise-deatails/serise-deatails.component';
import { UpcommingComponent } from './movies/upcomming/upcomming.component';
import { PlayingnowComponent } from './movies/playingnow/playingnow.component';
import { TopatedComponent } from './movies/movie/topated/topated.component';
import { PopularComponent } from './movies/popular/popular.component';
import { TvUpcommingComponent } from './tv-serise/tv-upcomming/tv-upcomming.component';
import { TvPlayingnowComponent } from './tv-serise/tv-playingnow/tv-playingnow.component';
import { TvPopularComponent } from './tv-serise/tv-popular/tv-popular.component';
import { TvTopratedComponent } from './tv-serise/tv-toprated/tv-toprated.component';

export const routes: Routes = [
    {path:'movies',component:MoviesComponent},
    {path:'tvSerises',component:TvSeriseComponent},
    {path:'movieDetails/:type/:id',component:DetailsComponent},
    // {path:'seriseDetails/:id',component:SeriseDeatailsComponent},
    {path:'movies/upComming',component:UpcommingComponent},
    {path:'movies/playingNow',component:PlayingnowComponent},
    {path:'movies/popular',component:PopularComponent},
    {path:'movies/topRated',component:TopatedComponent},
    
    {path:'tvSerises/upComming',component:TvUpcommingComponent},
    {path:'tvSerises/playingNow',component:TvPlayingnowComponent},
    {path:'tvSerises/popular',component:TvPopularComponent},
    {path:'tvSerises/topRated',component:TvTopratedComponent},
    {path:'',redirectTo:'movies',pathMatch:'full'}
];
