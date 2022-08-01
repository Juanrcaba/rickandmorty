import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewApiRoutingModule } from './view-api-routing.module';
import { ViewApiComponent } from './view-api.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ViewApiComponent
  ],
  imports: [
    CommonModule,
    ViewApiRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ViewApiModule { }
