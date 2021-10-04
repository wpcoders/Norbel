import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cafe-menu',
  templateUrl: './cafe-menu.page.html',
  styleUrls: ['./cafe-menu.page.scss'],
})
export class CafeMenuPage implements OnInit {

  constructor(public menu: MenuController,public navctl:NavController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(true);
   }
   doBack(){
     this.navctl.back();
   }
}
