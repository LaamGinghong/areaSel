import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BroadcastService} from './broadcast.service';
import {StoreService} from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  URL = 'assets/pcas-code.json';

  constructor(private http: HttpClient,
              private broadcastService: BroadcastService,
              private storeService: StoreService) {
  }

  getData() {
    return this.http.get(this.URL);
  }

  stopBubble(e) {
    e.stopPropagation();
  }

  openBox(type: string, data: Array<object>) {
    switch (type) {
      case 'city':
        if (data) {
          if (data.length) {
            this.storeService.setCityBoxStatus(true);
          } else {
            alert('请选择省/自治区/直辖市！');
          }
        } else {
          alert('请选择省/自治区/直辖市！');
        }
        break;
      case 'area':
        if (data) {
          if (data.length) {
            this.storeService.setAreaBoxStatus(true);
          } else {
            alert('请选择市！');
          }
        } else {
          alert('请选择市！');
        }
        break;
      case 'street':
        if (data) {
          if (data.length) {
            this.storeService.setStreetBoxStatus(true);
          } else {
            alert('请选择区/县');
          }
        } else {
          alert('请选择区/县');
        }
        break;
    }
  }

  clearInput(type: string) {
    switch (type) {
      case 'province':
        this.broadcastService.broadcastProvince([]);
        this.broadcastService.broadcastCity([]);
        this.broadcastService.broadcastArea([]);
        break;
      case 'city':
        this.broadcastService.broadcastCity([]);
        this.broadcastService.broadcastArea([]);
        break;
      case 'area':
        this.broadcastService.broadcastArea([]);
        break;
      case 'street':
        break;
    }
    return '';
  }
}
