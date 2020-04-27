import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticdataComponent } from './staticdata/staticdata.component';
import { ColumntypeComponent } from './columntype/columntype.component';
import { ColumnsComponent } from './columns/columns.component';


const routes: Routes = [
  {path:'StaticData', component:StaticdataComponent},
  {path:'ColumnType', component:ColumntypeComponent},
  {path:'Columns', component:ColumnsComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
