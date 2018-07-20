import {Component, OnInit} from '@angular/core';
import {StoreService} from './store.service';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public storeService: StoreService,
              private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getData().subscribe((data: Array<object>) => {
      this.storeService.allData = data;
    });
  }

  closeBox(status) {
    this.storeService.setProvinceBoxStatus(status);
    this.storeService.setCityBoxStatus(status);
    this.storeService.setAreaBoxStatus(status);
    this.storeService.setStreetBoxStatus(status);
  }
}
