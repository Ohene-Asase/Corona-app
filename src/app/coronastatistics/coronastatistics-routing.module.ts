import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaStatsComponent } from './corona-stats/corona-stats.component';


const routes: Routes = [
   {
     path:'main',
     component:CoronaStatsComponent
   },
   
   {
     path:'',
     redirectTo:'main',
     pathMatch:'full'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoronastatisticsRoutingModule { }
