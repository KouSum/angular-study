import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


interface OptionsGet{
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
      [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
interface OptionsPost{
  headers?: HttpHeaders | {[header: string]: string | string[]},
  observe?: 'body' | 'events' | 'response',
  params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
  reportProgress?: boolean,
  responseType?: 'arraybuffer'|'blob'|'json'|'text',
  withCredentials?: boolean,
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient,) { }
  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  getOptions<T>(options?:T):T{
    let options_:OptionsGet | OptionsPost = options || {}
    options_.headers = this.headers.set('Authorization', 'my-new-auth-token');

    return options_ as T
  }
  request(url:string, options?: OptionsGet){
    return this.http.get(url, this.getOptions<OptionsGet>(options)).pipe(
      catchError(this.handleError)
    );
  }
  
  requestPost(url:string, options?: OptionsPost){
    return this.http.post(url, this.getOptions<OptionsPost>(options)).pipe(
      catchError(this.handleError)
    )
  }
}
