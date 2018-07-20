import {Component, OnInit} from '@angular/core';
import {BroadcastService} from '../broadcast.service';
import {StoreService} from '../store.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  inputValue: string;
  areaData: Array<object>;

  constructor(private broadcastService: BroadcastService,
              public storeService: StoreService,
              public appService: AppService) {
  }

  ngOnInit() {
    this.broadcastService.subjectCity$.subscribe((data: Array<object>) => {
      this.inputValue = '';
      this.areaData = data;
    });
  }

  selectItem(val: { name: string, code: string, children: Array<object> }) {
    this.inputValue = val.name;
    this.broadcastService.broadcastArea(val.children);
  }

  clearInput(type) {
    this.inputValue = this.appService.clearInput(type);
  }
}
