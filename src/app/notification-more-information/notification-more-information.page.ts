import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notification-more-information',
  templateUrl: './notification-more-information.page.html',
  styleUrls: ['./notification-more-information.page.scss'],
})
export class NotificationMoreInformationPage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(true);
   }
}
