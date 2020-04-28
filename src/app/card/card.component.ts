import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public description: string;
  @Input() public isPrimary: boolean;
  @Input() public isFront: boolean;
  @Input() public img: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
