import {Component, OnInit} from '@angular/core';
import {BroadcastService} from '../broadcast.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  inputValue: string;
  cityData: Array<object>;

  constructor(private broadcastService: BroadcastService,
              public storeService: StoreService) {
  }

  ngOnInit() {
    this.broadcastService.subjectProvince$.subscribe((data: Array<object>) => {
      this.inputValue = '';
      this.cityData = data;
    });
  }

  stopBubble(e) {
    e.stopPropagation();
  }

  selectItem(val: { name: string, code: string, children: Array<object> }) {
    this.inputValue = val.name;
    this.broadcastService.broadcastCity(val.children);
  }
}
