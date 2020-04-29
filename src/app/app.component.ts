import {Component, Input, OnInit} from '@angular/core';
import {CardComponent} from './card/card.component';
import {CardModel} from './card.model';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currCardModel: CardModel;
  public cards = Array<CardModel>();

  constructor(private matIconRegistry: MatIconRegistry) {
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

  changeCard(newCardName: string): void {
    const cardIndex = this.cards.findIndex((el) => {
      return el.title === newCardName;
    });
    if (cardIndex !== undefined) {
      this.currCardModel = this.cards[cardIndex];
    } else {
      console.log('Card not found');
    }

  }

  addIcons(): void {
  }
}
