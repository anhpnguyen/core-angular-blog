import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post$: Object;
  constructor(private route: ActivatedRoute, private posts: PostsService) {
    this.route.params.subscribe( params => this.post$ = params.id );
   }

  ngOnInit() {
    this.posts.getPost(this.post$).subscribe(
      post => this.post$ = post
    );
  }

}
