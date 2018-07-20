import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {BroadcastService} from '../broadcast.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  inputValue: string;

  constructor(public storeService: StoreService,
              private broadcastService: BroadcastService,
              public appService: AppService) {
  }

  ngOnInit() {
  }

  selectItem(val: { name: string, code: string, children: Array<object> }) {
    this.inputValue = val.name;
    this.broadcastService.broadcastProvince(val.children);
  }

  clearInput(type) {
    this.inputValue = this.appService.clearInput(type);
  }
}
