import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ApiTestService {

  apiRoot : string = "https://localhost:44329/api/"

  constructor(private _http : HttpClient) { }

  GetValues(): Observable<any> {
    return this._http.get(this.apiRoot + "values")
      .do(data => {
      })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
