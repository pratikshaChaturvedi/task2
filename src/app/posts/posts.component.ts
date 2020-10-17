import { Component, OnInit } from '@angular/core';
import { Post } from './posts.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  post = {} as Post;
  
  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    // console.log('Fetching all posts');
    this.posts= [];
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    },error =>{
      console.log('Error in fetching posts.');
    });
  }

  deletePost(post) {
    console.log('Deleting a Post');
    console.log(post);
    this.postService.deletePost(post).subscribe(data => {
      console.log(data);
    },error =>{
      console.log('Error in Deleting post.');
    });
    this.getAllPosts();
  }

  updatePost(post){
    console.log('Updating a Post');
    console.log(post);
    this.postService.updatePost(post).subscribe(data => {
      console.log(data);
    },error =>{
      console.log('Error in Updating post.');
    });
    this.getAllPosts();
  }

  addPost(post)
  {
    console.log('Adding new Post');
    console.log(post);
    this.postService.addPost(post).subscribe(data => {
      console.log(data);
    },error =>{
      console.log('Error in Adding post.');
    });
    this.getAllPosts();
  }

}
