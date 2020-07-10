import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private url = "/api/medias"
  constructor(private _http:HttpClient) { }

  getMedias(){
    return this._http.get(this.url);
  }
}
