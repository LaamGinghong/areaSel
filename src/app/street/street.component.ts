import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {AppService} from '../app.service';
import {BroadcastService} from '../broadcast.service';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {
  inputValue: string;
  streetData: Array<object>;

  constructor(public storeService: StoreService,
              public appService: AppService,
              private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadcastService.subjectArea$.subscribe((data: Array<object>) => {
      this.inputValue = '';
      this.streetData = data;
    });
  }

  selectItem(val: { name: string, code: string, children: Array<object> }) {
    this.inputValue = val.name;
  }

  clearInput(type) {
    this.inputValue = this.appService.clearInput(type);
  }
}
