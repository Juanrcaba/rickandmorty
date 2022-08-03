import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewApiComponent } from './view-api/view-api.component';

const routes: Routes = [
  {path:'',component:ViewApiComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
