import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

  public startWidth: number | undefined;
  @Input()
  public rating: number = 2
  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnChanges() {
    this.startWidth = this.rating * 125 / 5;
  }

  public sendRating(): void {
    this.starRatingClicked.emit(`la note de est de ${this.rating}`);
  }
}
