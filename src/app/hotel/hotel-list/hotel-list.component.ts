import { Component, OnInit } from '@angular/core';
import {IHotel} from "../Interface/hotel";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
public title:string ="Ma liste d hotels";

public hotels:IHotel[] = [{
  hotelId:1,
   hotelName:"King-FadPalace",
  imageUrl:"assets/img/hotelKingFadPalace.jpg",
  price:500,
  description:"Hotel 5 etoiles"
},
{
  hotelId:2,
  hotelName:"Terroubi",
  imageUrl:"assets/img/terroubiHotel.jpg",
  price:300,
  description:"Hotel 5 etoiles"
},
{
  hotelId:3,
  hotelName:"Yass Hotel",
  imageUrl:"assets/img/yassHotel.jpg",
  price:150,
  description:"Hotel 5 etoiles"
},
{
  hotelId:4,
  hotelName:"RadissonBlu",
  imageUrl:"assets/img/RadissonBlu.jpg",
  price:100,
  description:"Hotel 5 etoiles"
}];

public showBadge :boolean;
private _hotelFilter = 'mot';

public filteredHotels : IHotel[]=[];

  constructor() {
    this.showBadge = false;
  }
  ngOnInit(): void {
    this.filteredHotels =this.hotels;
    this.hotelFilter = 'mot';
  }
  public toggleIsNewBadge():void {
    this.showBadge = ! this.showBadge;
  }

  public get hotelFilter(){
    return this._hotelFilter;
  }
  public set hotelFilter(filter:string) {
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter):this.hotels;
  }

  private filterHotels(criteria:string):IHotel[] {
    criteria = criteria.toLocaleLowerCase();
    const res = this.hotels.filter((hotel : IHotel)=>
      hotel.hotelName.toLocaleLowerCase().indexOf(criteria)!=-1
    );
    return res;
  }
}
