import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getPost(postId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + postId);
  }

}
