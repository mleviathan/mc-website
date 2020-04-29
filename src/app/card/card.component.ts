import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../card.model';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardState', [
        state('normal', style({
          'background-color': 'opacity: 1'
        })),
        state('invisible', style({
          'background-color': 'opacity: 0'
        })),
      ]
    )
  ]
})
export class CardComponent implements OnInit {
  @Input() card: CardModel;

  constructor() {

  }

  ngOnInit(): void {
  }

}
