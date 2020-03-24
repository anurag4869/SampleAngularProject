import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  arr=['ait','stqa','bda','dcc'];
  addItem(value:string){
    this.arr.push(value);
  }
}
