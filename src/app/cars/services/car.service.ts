import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../models/Car';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'https://next.json-generator.com/api/json/get/4kNE1mkbc';


  constructor(private httpClient: HttpClient) {
  }


  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url);
  }


  getCar(id): Observable<Car> {
    return this.httpClient.get<Car>(this.url + '/' + id);
  }


}
