import {Injectable} from '@angular/core';
import {observable, computed, action, autorun} from 'mobx';
import {AppService} from './app.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  @observable allData: Array<object>;
  @observable provinceBox = false;
  @observable cityBox = false;

  constructor(private appService: AppService) {
    autorun(() => {
      this.appService.getData().subscribe((data: Array<object>) => {
        this.allData = data;
      });
    });
  }

  @computed get provinceBoxStatus() {
    return this.provinceBox;
  }

  @action setProvinceBoxStatus(status) {
    this.provinceBox = status;
  }

  @computed get cityBoxStatus() {
    return this.cityBox;
  }

  @action setCityBoxStatus(status) {
    this.cityBox = status;
  }
}
