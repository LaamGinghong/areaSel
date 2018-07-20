import {Injectable} from '@angular/core';
import {observable, computed, action} from 'mobx';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  @observable provinceBox = false;

  constructor() {
  }

  @computed get provinceBoxStatus() {
    return this.provinceBox;
  }

  @action setProvinceBoxStatus(status) {
    this.provinceBox = status;
  }
}
