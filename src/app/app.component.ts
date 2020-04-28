import {Component, OnInit} from '@angular/core';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mc-website';
  public cards = Array<CardComponent>();

  ngOnInit(): void {
    const primCard = new CardComponent();
    primCard.title = 'Michele Cafagna';
    primCard.subtitle = 'Full Stack Developer';
    primCard.description = 'Born in 1997 and grown reading Tolkien';
    primCard.isPrimary = true;
    primCard.isFront = true;
    primCard.img = 'https://file.cure-naturali.it/site/image/content/21801.jpg?format=jpg';
    this.cards.push(primCard);

    const secCard = new CardComponent();
    secCard.title = 'About Me';
    secCard.subtitle = 'About Me';
    secCard.description = 'About Me';
    secCard.img = 'About Me';
    secCard.isPrimary = false;
    secCard.isFront = false;
    this.cards.push(secCard);
  }
}
