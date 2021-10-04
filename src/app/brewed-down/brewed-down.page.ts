import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-brewed-down',
  templateUrl: './brewed-down.page.html',
  styleUrls: ['./brewed-down.page.scss'],
})
export class BrewedDownPage implements OnInit {

  constructor(public navctl:NavController,
    public menu:MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(true);
   }
  doQrCode(){
    this.navctl.navigateForward('/qr-code');
      }
      doCafeMenu(){
        this.navctl.navigateForward('/cafe-menu')
      }
     
}
