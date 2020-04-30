import {Component, HostListener, OnInit} from '@angular/core';
import {CardModel} from './card.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cardState', [
        state('normal', style({
          opacity: '1'
        })),
        state('invisible', style({
          opacity: '0'
        })),
        transition('normal => invisible', animate(500)),
        transition('invisible => normal', animate(500)),
      ]
    )
  ]
})
export class AppComponent implements OnInit {
  public currCardModel: CardModel;
  public cards = Array<CardModel>();
  state = 'normal';

  constructor() {
    this.cards = [
      {
        title: 'Michele Cafagna',
        subtitle: 'Full Stack Developer',
        description: 'Born in 1997 and grown reading Tolkien',
        isFront: true,
        isPrimary: true,
        img: 'https://file.cure-naturali.it/site/image/content/21801.jpg?format=jpg'
      },
      {
        title: 'About me',
        subtitle: 'About me',
        description: 'About me',
        isFront: true,
        isPrimary: true, img: ''
      }
    ];

    this.currCardModel = this.cards[0];
  }

  ngOnInit(): void {

  }

  @HostListener('click', ['$event.target'])
  onWindowScroll(event: any): void {
    this.state = 'invisible';
  }

  changeCard(): void {
    const cardIndex = this.cards.findIndex((el) => {
      return el.title === this.currCardModel.title;
    });

    const nextElementIndex = cardIndex + 1;

    if (this.cards[nextElementIndex] !== undefined) {
      this.currCardModel = this.cards[nextElementIndex];
    }
  }

  onCardAnimationStart(): void {

  }

  onCardAnimationEnd(): void {
    if (this.state === 'invisible') {
      // going from Normal to invisible
      this.state = 'normal';
      this.changeCard();
    }
  }
}
