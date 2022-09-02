import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NausComponent } from './components/naus/naus.component';
import { LogsGuard } from './shared/logs.guard';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "naus", component: NausComponent, canActivate: [LogsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
