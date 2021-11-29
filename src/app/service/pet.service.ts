import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Pet} from "../model/pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private _url: string

  constructor(private http: HttpClient) {
    this._url = environment.backendUrl + '/pets'
  }


  get url(): string {
    return this._url;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this._url)
      .pipe(map((results) => results.sort(
        (a: Pet, b: Pet) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        }
      )))
  }

}
