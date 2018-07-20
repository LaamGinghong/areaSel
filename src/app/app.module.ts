import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProvinceComponent} from './province/province.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MobxAngularModule} from 'mobx-angular';
import { CityComponent } from './city/city.component';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinceComponent,
    CityComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
