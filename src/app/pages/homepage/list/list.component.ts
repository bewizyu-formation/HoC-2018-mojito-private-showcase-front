import { Component, OnInit } from '@angular/core';

interface IPseudo {
  id: number;
  rating: number;
  contact: string;
  company: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ratingClicked: number;
  itemIdRatingClicked: string;
  items: IPseudo[] = [
    { 'id': 0, 'rating': 3, 'contact': 'Faresse', 'company': 'House of Code' }
  ];

  ngOnInit() {
  }
  ratingComponentClick(clickObj: any): void {
    const item = this.items.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.company;
    }

  }

}
