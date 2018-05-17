import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url)
  }

  save(data:any){
    return this.http.post(this.url, JSON.stringify(data))
  }

  update(id: number, data:any){
    return this.http.patch(this.url + '/' + id, JSON.stringify(data))
  }

}
