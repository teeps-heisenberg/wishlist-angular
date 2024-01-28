import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input()
  wishes: WishItem[] = [];
  constructor() {

  }

  ngOnInit(): void {

  }



}
