import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { ServicesService } from 'src/app/providers/services.service';
import { UtilityService } from 'src/app/providers/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(public navCtl: NavController,
    public menu:MenuController,
    public service: ServicesService,
    public utility:UtilityService ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,]),

    });
   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(false);
   }
  doRegistration(){
    this.navCtl.navigateForward('/registration');
  }
  doForgotPassword(){
    this.navCtl.navigateForward('/forgot-password');
  }
  doVerification(){
    
   

  }
  doLogin(data){
  
    if (this.loginForm.valid) {
      this.navCtl.navigateForward('/verification');
  
    let formdata = new FormData();
    formdata.append('user_email', data.email);
    formdata.append('user_password', data.password);
    this.service.doLogin(formdata).subscribe(res => {
    if (res.status == true) {
   console.log(res);
     this.navCtl.navigateForward('/verification');
    
    }else{

      this.utility.presentToast(res.message);
     }
  });

  }else {
    console.log('form errr');
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      control.markAsTouched({ onlySelf: true });
    })
  }
}
}