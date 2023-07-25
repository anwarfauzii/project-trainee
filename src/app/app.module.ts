import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { CountriesRepository } from './countries/domain/repository/countries.repository';
import { CountriesApiRepository } from './countries/data/repository/api/countries.ap.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: CountriesRepository, useClass: CountriesApiRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
