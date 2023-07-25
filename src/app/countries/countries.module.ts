import { NgModule } from '@angular/core';
import { CountriesComponent } from './presentation/list/countries.component';
import { CountriesRoutingModule } from './countries.routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [CountriesRoutingModule, NgxDatatableModule],
  declarations: [CountriesComponent],
})
export class CountriesModule {}
