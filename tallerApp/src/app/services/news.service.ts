import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }


  getIntervalSeconds( milliseconds: number ) {
    return interval(milliseconds);
  }

}
