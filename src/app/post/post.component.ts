import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, error=> {
        throw error
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.save(post)
      .subscribe(response => {
        post['id'] = response.json().id
        this.posts.splice(0, 0, post)
        console.log(response.json())
      }, error => {
        alert('An unexpected error ocurred');
      })
  }

  updatePost(post) {
    this.service.update(post['id'], { isRead: true })
      .subscribe(response => {
        console.log(response.json())
      }, (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has alraedy been deleted.')
        else
          throw error;
      })
  }

}
