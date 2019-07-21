import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = 'ahmed';
  constructor() {}
  handleChange(){
    this.name = 'ahmed ayman';
  }
}
