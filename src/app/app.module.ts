import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StaticdataComponent } from './staticdata/staticdata.component';

import {AngularMaterial} from 'src/shared/angular-material';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ColumntypeComponent } from './columntype/columntype.component';
import { ColumnsComponent } from './columns/columns.component';
import {TypeCellRenderer} from './columns/type-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    StaticdataComponent,
    ColumntypeComponent,
    ColumnsComponent,
    TypeCellRenderer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularMaterial,
    AgGridModule.withComponents([TypeCellRenderer]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
