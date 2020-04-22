import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TopHeadline } from '../interfaces/interfaces';

const apiUrl = environment.newsApiUrl;
const apiKey = environment.newsApiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }


  getIntervalSeconds( milliseconds: number ) {
    return interval(milliseconds);
  }

  getTopHeadlines() {
    const url = `${apiUrl}/top-headlines?country=us&apiKey=${apiKey}`;
    console.log(url);
    return this.http.get<TopHeadline>(url);
  }

}
