import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestValueService {
  myValue1 = 'v1'

  constructor(private http: HttpClient) { }

  setValue(value: string) {
    // this.http.
    this.myValue1 = value
  }
}
