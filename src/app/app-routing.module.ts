import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './Layout/authentication/authentication.component';
import { MainComponent } from './Layout/main/main.component';


const routes: Routes = [
  {
    path:'auth',
    component:AuthenticationComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'main',
    component:MainComponent,
    loadChildren: () => import('./coronastatistics/coronastatistics.module').then(m => m.CoronastatisticsModule)

  },
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
