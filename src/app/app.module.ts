import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import {NationService} from '../services/nation.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreModule.forFeature('elements', reducers),
    EffectsModule.forRoot(effects),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    ...effects,
    NationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
