import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  provinceData: Array<object>;
  inputValue: string;

  @Input() set allData(val) {
    if (val) {
      this.provinceData = val;
    }
  }

  constructor(public storeService: StoreService) {
  }

  ngOnInit() {
  }

  selectItem(val: { name: string, code: string, children: Array<object> }) {
    this.inputValue = val.name;
  }

  stopBubble(e) {
    e.stopPropagation();
  }
}
