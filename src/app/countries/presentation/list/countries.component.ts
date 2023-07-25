import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetCountriesUsecase } from '../../domain/usecase';
import { ICountriesModel } from '../../domain/model/countries.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountriesComponent implements OnInit {
  rows: ICountriesModel[] = [];
  isLoadingIndicator = false;
  constructor(private _getCountriesUsecase: GetCountriesUsecase) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch(){
    return new Promise<boolean>((resolve) => {
      this._getCountriesUsecase.execute().subscribe(res => {
        if (res) {
          console.log(res);
          this.rows = res;
          resolve(true);
        }
      },err => {
        resolve(false);
      })
    })
  }
}
