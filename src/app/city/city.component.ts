import {Component, OnInit} from '@angular/core';
import {BroadcastService} from '../broadcast.service';
import {StoreService} from '../store.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  inputValue: string;
  cityData: Array<object>;

  constructor(private broadcastService: BroadcastService,
              public storeService: StoreService,
              public appService:AppService) {
  }

  ngOnInit() {
    this.broadcastService.subjectProvince$.subscribe((data: Array<object>) => {
      this.inputValue = '';
      this.cityData = data;
    });
  }


  selectItem(val: { name: string, code: string, children: Array<object> }) {
    this.inputValue = val.name;
    this.broadcastService.broadcastCity(val.children);
  }
}
