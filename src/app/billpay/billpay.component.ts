import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-billpay',
  templateUrl: './billpay.component.html',
  styleUrls: ['./billpay.component.css']
})
export class BillpayComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  headers:any;

  onSubmit(theForm: NgForm) {

    this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    this.http.post('http://localhost:9377/camel/billpay', theForm.value.phoneno,{headers: this.headers}).subscribe(res => {
      alert("Bill Paid");
    }, error =>{
      console.log('Something went wrong');
    });
    theForm.resetForm();
  }
}
