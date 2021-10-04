import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navctl:NavController,public toast:ToastController) {

  }
  doLegal(){
    this.navctl.navigateForward('/legal-page');

  }
  doContactUs(){
    this.navctl.navigateForward('/contact-us');

  }
  doMyAccount(){
    this.navctl.navigateForward('/my-account');

  }
  doReportAnIssue(){
    this.navctl.navigateForward('/report-an-issue');

  }

}
