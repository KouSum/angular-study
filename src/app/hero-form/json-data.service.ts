import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get('api/post')
  }
}
