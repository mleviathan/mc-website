import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../card.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardModel;

  constructor() {

  }

  ngOnInit(): void {
  }
}
