import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
public title:string ="Ma liste d hotels";

public hotels:any[] = [{
  id:1,
   name:"King-FadPalace",
  imageUrl:"assets/img/hotelKingFadPalace.jpg",
  price:500,
  description:"Hotel 5 etoiles"
},
{
  id:2,
  name:"Terroubi",
  imageUrl:"assets/img/terroubiHotel.jpg",
  price:300,
  description:"Hotel 5 etoiles"
},
{
  id:3,
  name:"Yass Hotel",
  imageUrl:"assets/img/yassHotel.jpg",
  price:150,
  description:"Hotel 5 etoiles"
},
{
  id:4,
  name:"RadissonBlu",
  imageUrl:"assets/img/RadissonBlu.jpg",
  price:100,
  description:"Hotel 5 etoiles"
}];

public showBadge :boolean;
public hotelFilter ='mot';

  constructor() {
    this.showBadge = false;
  }

  public toggleIsNewBadge():void {
    this.showBadge = ! this.showBadge;
  }

  ngOnInit(): void {
  }
}
