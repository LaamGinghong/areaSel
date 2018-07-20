import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('city') cityDom: ElementRef;

  constructor(private broadcastService: BroadcastService,
              public storeService: StoreService,
              public appService: AppService) {
  }

  ngOnInit() {
    this.broadcastService.subjectProvince$.subscribe((data: Array<object>) => {
      this.inputValue = '';
      this.cityData = data;
      this.broadcastService.broadcastCity([]);
      this.broadcastService.broadcastArea([]);
    });
  }


  selectItem(val: { name: string, code: string, children: Array<object> }) {
    this.inputValue = val.name;
    this.broadcastService.broadcastCity(val.children);
  }

  clearInput(type) {
    this.inputValue = this.appService.clearInput(type);
  }

  openBox(type: string) {
    this.appService.openBox(type, this.cityData);
    this.cityDom.nativeElement.blur();
  }
}
