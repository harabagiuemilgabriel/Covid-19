import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/hero-page/main/main.component';
import { ItemComponent } from './components/list-countrys/item/item.component';
import { CountryComponent } from './components/list-countrys/country/country.component';
import { FilterComponent } from './components/list-countrys/filters/filter/filter.component';
import { AboutCountryComponent } from './components/list-countrys/about-country/about-country.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent,
    CountryComponent,
    FilterComponent,
    AboutCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
