import { Observable } from "rxjs";
import { ICountriesModel, ICountriesQuery } from "../model/countries.model";

export abstract class CountriesRepository {
  abstract getCountries(query?: ICountriesQuery): Observable<ICountriesModel[]>;

}