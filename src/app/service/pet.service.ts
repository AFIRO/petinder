import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private _url : string

  constructor(private http: HttpClient) {
    this._url = environment.backendUrl + '/pets'
  }


  get url(): string {
    return this._url;
  }

  getPets(): Observable<any> {
    return this.http.get(this._url)
  }
}
