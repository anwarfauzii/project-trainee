import { Injectable } from "@angular/core";
import { UseCase } from "src/@core/domain/usecase/usecase";
import { ICountriesModel, ICountriesQuery } from "../model/countries.model";
import { CountriesRepository } from "../repository/countries.repository";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class GetCountriesUsecase implements UseCase<ICountriesQuery, ICountriesModel[]> {
    constructor(
        private countriesRepository: CountriesRepository) {}
    
      execute(query?: ICountriesQuery): Observable<ICountriesModel[]> {
        return this.countriesRepository.getCountries(query);
      }
  }