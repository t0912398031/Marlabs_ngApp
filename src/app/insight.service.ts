import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsightService {
  private insight
  private url = "/api/insights"
  constructor(private _http:HttpClient) { }

  getInsights(){
    return this._http.get(this.url);
  }
  setCurrentInsight(i){
    this.insight = i
  }
  getCurrentInsight(){
    return this.insight
  }
}
