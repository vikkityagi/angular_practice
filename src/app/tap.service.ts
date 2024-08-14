import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';


interface Car {
  id: number;
  carName: string;
}

@Injectable({
  providedIn: 'root'
})
export class TapService {
  carList: Car[] = [];
  myobservable: any;

  constructor(private http:HttpClient){
    for (let i = 1; i <= 50; i++) {
      this.carList.push({
        id: i,
        carName: `Car ${i}`
      });
    }

    this.myobservable = from(this.carList);
  }

  // getData(): Observable<Car[]>{
  //   return this.http.get()
  // }
}
