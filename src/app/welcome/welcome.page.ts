import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public navCtl: NavController,
    public router: Router,
    public menu:MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(false);
 //   this.router.navigateByUrl('/tabs');
   }
  doRegistrationPage(){
    this.navCtl.navigateForward('/registration');
  }
}
