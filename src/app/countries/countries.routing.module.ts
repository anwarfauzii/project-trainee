import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './presentation/list/countries.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
    title: 'countries',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
