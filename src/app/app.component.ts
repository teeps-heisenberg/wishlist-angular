import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Get Married'),
  ]



  title = 'wishlist-angular';

  filter: any;
  // get visibleItems(): WishItem[] {
  //   // let value = this.listFilter;
  //   // if (value === '0') {
  //   //   return this.items;
  //   // }
  //   // else if (value === '1') {
  //   //   return this.items.filter(item => !item.isComplete);
  //   // }
  //   // else {
  //   //   return this.items.filter(item => item.isComplete);
  //   // }
  //   return this.items.filter(this.filter);
  // };



  // filterChanged(value: any) {

  // }


}
