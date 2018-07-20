import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProvinceComponent} from './province/province.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MobxAngularModule} from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    ProvinceComponent
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
