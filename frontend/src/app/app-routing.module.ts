import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { PlayerComponent } from './player/player.component';
import { ObsComponent } from './obs/obs.component';

const routes: Routes = [
  {path: '', component: CarouselComponent},
  { path: 'camara', 
    children: [
      {path: '1', component: ObsComponent},
      {path: '2', component: PlayerComponent},
      {path: '3', component: PlayerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
