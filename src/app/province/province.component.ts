import {Component, Input, OnInit} from '@angular/core';

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
      console.log(this.provinceData);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
