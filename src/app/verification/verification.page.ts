import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(public navCtl: NavController,
    public menu:MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(false);
   }
  doAddCafe(){
    this.navCtl.navigateForward('/home');
  }
}
