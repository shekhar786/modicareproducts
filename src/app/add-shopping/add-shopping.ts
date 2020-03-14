import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase} from "angularfire2/database"; 


@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})              
export class AddShoppingPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {

  }
  
}
