import {Component, OnInit} from '@angular/core';
import {BroadcastService} from '../broadcast.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  inputValue: string;

  constructor(private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadcastService.subject$.subscribe(data => {
      console.log(data);
    });
  }

}
