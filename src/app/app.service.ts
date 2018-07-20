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
              private broadcastService: BroadcastService) {
  }

  getData() {
    return this.http.get(this.URL);
  }

  stopBubble(e) {
    e.stopPropagation();
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
