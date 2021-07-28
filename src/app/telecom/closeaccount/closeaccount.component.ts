import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-closeaccount',
  templateUrl: './closeaccount.component.html',
  styleUrls: ['./closeaccount.component.css']
})
export class CloseaccountComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  headers:any;

  onSubmit(theForm: NgForm) {

    var postdata = {"phoneno" : "6508621000","unlock" : "false","eDelivery" : "false"};
    
    postdata.phoneno = theForm.value.phoneno;
    postdata.unlock = theForm.value.unlock.length>0 ? theForm.value.unlock : 'false';
    postdata.eDelivery = theForm.value.edelivery.length>0 ? theForm.value.edelivery : 'false';

    console.log(postdata);
    this.headers = new HttpHeaders({'Content-Type' : 'application/vnd.kafka.json.v2+json'});
    this.http.post('http://localhost:8680/topics/close-account', {
      "records" : [ {
        "value" : postdata
      }]
    },{headers: this.headers}).subscribe(res => {
      //alert("Request created");
    }, error =>{
      console.log('Something went wrong');
    });
  
  }
}
