import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { FIREBASE_CREDENTIALS } from '../../firebase.credentials';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {
  public name : any;
  public pin  :number;
  public address  :string;
  public state  :any;
  public mobile  :number;
  constructor() {
   
   }

  ngOnInit() {
  }

  submit = () => {
                    
    if(this.name && this.pin && this.address && this.state && this.mobile){
      firebase.initializeApp(FIREBASE_CREDENTIALS);
      //var db = firebase.firestore();
      firebase.database().ref('buying').push({
      "productName" : this.name,
      "pinCode" : this.pin,
      "address" : this.address,
      "state" : this.state,
      "mobile" : this.mobile
      })
      alert("data received you will receive call shortly")
    }
    else {
      alert("please enter valid details")
    }
  }

}
