import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { ServicesService } from 'src/app/providers/services.service';
import { UtilityService } from 'src/app/providers/utility.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm: FormGroup;
  dobDate:any;
  constructor(public navCtl: NavController,
    public menu: MenuController,
    public service: ServicesService,
    public utility:UtilityService ) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,]),
      dob: new FormControl('', [Validators.required,]),
    });
  
   }
   ionViewDidEnter(){
    this.menu.enable(false);
   }
  ngOnInit() {
  }
  doRegistration(data){
    console.log(data);
    if (this.registrationForm.valid) {
      let formdata = new FormData();
      formdata.append('user_email', data.email);
      formdata.append('user_name', data.name);
      formdata.append('user_dob', data.dob);
      formdata.append('user_password', data.password);
      this.service.doRegistration(formdata).subscribe(res => {
      if (res.status == true) {
     console.log(res);
     
      }else{

        this.utility.presentToast(res.message);
       }
    });
    }
    else {
        console.log('form errr');
        Object.keys(this.registrationForm.controls).forEach(field => {
          const control = this.registrationForm.get(field);
          control.markAsTouched({ onlySelf: true });
        })
    }    
  }
  doLogin(){
    this.navCtl.navigateForward('/login');
  }
  date(dobDate){
    this.dobDate = dobDate;
    //  console.log(this.dobDate);
//      this.dobDate = this.dobDate.toString().substring(0, 10);
      console.log(this.dobDate);
  }
}
