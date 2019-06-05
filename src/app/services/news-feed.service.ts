import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsFeedService {
  myAppUrl: string;
  constructor(private httpService: HttpClient) { 
    this.myAppUrl = "https://newsapi.org/v2/everything?q=";
  }
  getNewsFeed(obj):Observable<any> {
    return this.httpService.get<any>(this.myAppUrl + obj + '&apiKey=c89cf80906cb413a86f9e74d46bffb5b').pipe(
      tap(form => this.log(`Get News Feed Data..`))      
    );
  }
  private log(message: string) {
    console.log(message);
  }
}
