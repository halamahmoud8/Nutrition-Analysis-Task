import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServices {

  private foodData = new Subject<any>();
  foodData$= this.foodData.asObservable();

  constructor() { }

  sendFoodData(foodResult:any){
    this.foodData.next(foodResult);
  }

}
