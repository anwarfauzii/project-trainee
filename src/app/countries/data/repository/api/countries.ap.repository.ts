import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/@core/services/api.service";
import { ICountriesModel, ICountriesQuery } from "src/app/countries/domain/model/countries.model";
import { CountriesRepository } from "src/app/countries/domain/repository/countries.repository";

@Injectable({
    providedIn: 'root',
  })
  export class CountriesApiRepository extends CountriesRepository {
    constructor(
      private apiService: ApiService) {
      super();
    }

    getCountries(query?: ICountriesQuery): Observable<ICountriesModel[]> {
        const url = `https://restcountries.com/v3.1/region/asia`;
        return this.apiService.get<ICountriesModel[]>(url, query);
      }
}