import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-legal-page',
  templateUrl: './legal-page.page.html',
  styleUrls: ['./legal-page.page.scss'],
})
export class LegalPagePage implements OnInit {

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
