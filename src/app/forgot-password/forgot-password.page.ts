import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;
  constructor(public navCtl:NavController,
    public menu:MenuController) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required,]),
   
    });
   
   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(false);
   }
  doForgotPassword(){
    if (this.forgotPasswordForm.valid) {
    this.navCtl.navigateForward('/login');
  }
  else {
    console.log('form errr');
    Object.keys(this.forgotPasswordForm.controls).forEach(field => {
      const control = this.forgotPasswordForm.get(field);
      control.markAsTouched({ onlySelf: true });
    })
}}
}
