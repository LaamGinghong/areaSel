import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {BroadcastService} from '../broadcast.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  inputValue: string;

  constructor(public storeService: StoreService,
              private broadcastService: BroadcastService) {
  }

  ngOnInit() {
  }

  selectItem(val: { name: string, code: string, children: Array<object> }) {
    this.inputValue = val.name;
    this.broadcastService.broadcastProvince(val.children);
  }

  stopBubble(e) {
    e.stopPropagation();
  }
}
