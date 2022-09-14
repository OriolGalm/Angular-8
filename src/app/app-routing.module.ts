import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { NausComponent } from './components/naus/naus.component';
import { PilotsComponent } from './components/pilots/pilots.component';
import { LogsGuard } from './shared/logs.guard';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "naus", component: NausComponent, canActivate: [LogsGuard]},
  {path: "details/:url", component: DetailsComponent, canActivate: [LogsGuard]},
  {path: "pilots", component: PilotsComponent, canActivate: [LogsGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
