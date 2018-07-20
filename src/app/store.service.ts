import {Injectable} from '@angular/core';
import {observable, computed, action} from 'mobx';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  @observable allData: Array<object>;
  @observable provinceBox = false;
  @observable cityBox = false;
  @observable areaBox = false;
  @observable streetBox = false;

  constructor() {
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

  @computed get areaBoxStatus() {
    return this.areaBox;
  }

  @action setAreaBoxStatus(status) {
    this.areaBox = status;
  }

  @computed get streetBoxStatus() {
    return this.streetBox;
  }

  @action setStreetBoxStatus(status) {
    this.streetBox = status;
  }
}
