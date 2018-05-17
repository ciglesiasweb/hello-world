import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Injectable()
export class PostService {
  private url = 'http://abcdjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url)
  }

  save(data: any) {
    return this.http.post(this.url, JSON.stringify(data))
  }

  update(id: number, data: any) {
    return this.http.delete(this.url + '/' + id, JSON.stringify(data))
  }
}
