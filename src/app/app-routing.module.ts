import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NausComponent } from './components/naus/naus.component';

const routes: Routes = [
  {path: "", component: NausComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
