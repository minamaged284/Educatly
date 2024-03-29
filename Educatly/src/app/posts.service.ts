import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _HttpClient:HttpClient) { }

  getPostsAPI():Observable<any>{
    return this._HttpClient.get(`https://dev.to/api/articles`)
  }
}
