import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = 'ahmed';

  constructor(private toast: ToastController,private router: Router) {}


  async handleChange(){
    const toast= await this.toast.create({
      message:`hello ${this.name}`,
      duration:2000
    });
    toast.present();
    this.name = 'ahmed ayman';
  }

  navigate(){
    this.router.navigateByUrl('/details');
  }

  navigateWithId(){
    this.router.navigateByUrl('/details/15');
  }
}
