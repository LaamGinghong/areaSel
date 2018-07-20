import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  URL = 'assets/pcas-code.json'

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.URL);
  }
}
