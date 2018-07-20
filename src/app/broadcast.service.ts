import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  subject$ = new Subject();

  constructor() {
  }

  broadcastSubject(content) {
    this.subject$.next(content);
  }
}
