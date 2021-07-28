import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-statusaccount',
  templateUrl: './statusaccount.component.html',
  styleUrls: ['./statusaccount.component.css']
})
export class StatusaccountComponent implements OnInit {

  posts: any;
  headers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }
    );



    this.http.get<any>('http://localhost:9377/camel/accountclosestatus', { headers: this.headers }).subscribe(posts => {

      this.posts = posts;
      console.log(posts);

    });

  }

}
