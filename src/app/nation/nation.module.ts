import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationRoutingModule } from './nation-routing.module';
import { IndexModule } from "./index/index.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NationRoutingModule,
    IndexModule,
  ]
})
export class NationModule { }
