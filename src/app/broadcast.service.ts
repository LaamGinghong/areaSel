import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  subjectProvince$ = new Subject();
  subjectCity$ = new Subject();
  subjectArea$ = new Subject();

  constructor() {
  }

  broadcastProvince(content) {
    this.subjectProvince$.next(content);
  }

  broadcastCity(content) {
    this.subjectCity$.next(content);
  }

  broadcastArea(content) {
    this.subjectArea$.next(content);
  }
}
