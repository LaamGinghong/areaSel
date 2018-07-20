import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {StoreService} from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allData: Array<object>;

  constructor(private appService: AppService,
              private storeService: StoreService) {
  }

  ngOnInit() {
    this.appService.getData().subscribe((data: Array<object>) => {
      this.allData = data;
    });
  }
}
