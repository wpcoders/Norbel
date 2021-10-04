import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-all-cafes',
  templateUrl: './all-cafes.page.html',
  styleUrls: ['./all-cafes.page.scss'],
})
export class AllCafesPage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(true);
   }
}
