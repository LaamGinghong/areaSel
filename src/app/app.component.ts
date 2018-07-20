import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {StoreService} from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public storeService: StoreService) {
  }

  ngOnInit() {
  }

  closeBox(status) {
    this.storeService.setProvinceBoxStatus(status);
    this.storeService.setCityBoxStatus(status);
  }
}
