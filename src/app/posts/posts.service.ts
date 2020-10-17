import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './posts.model';

@Injectable({
    providedIn: 'root'
  })

export class PostService {

    private API = 'https://jsonplaceholder.typicode.com/posts';

    constructor(
        private http: HttpClient) {
    }

    public getAllPosts() : Observable<any>{
        return this.http.get(this.API,
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    public addPost(post: Post) : Observable<any>{
        return this.http.post(this.API,
        {
            title: post.title,
            body: post.body,
            userId: post.userId
        },
        {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    public updatePost(post: Post) : Observable<any>{
        return this.http.put(this.API + '/' + post.id,
         post, 
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }

    public deletePost(post : Post) : Observable<any>{
        return this.http.delete(this.API + '/' + post.id,
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
    }
    
}
