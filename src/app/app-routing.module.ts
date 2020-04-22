import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticdataComponent } from './staticdata/staticdata.component';


const routes: Routes = [
  {path:'StaticData', component:StaticdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
