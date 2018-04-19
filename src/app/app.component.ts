import { Component } from '@angular/core';
import {Quotes}from './quotes'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    quotes = [
      new Quotes (1,'I dont trust easily but when i trust you dont make me regret it.'),
      new Quotes (2,'Ive been in love its painful pointless and overrated'),
      new Quotes ( 3,'if youre going to be bad be bad with a reason or else youre not worth forgiving.'),
      new Quotes (4,'Our fate lives within us.We just need to be brave to see it.'),
      new Quotes (5,'humanity is my greatest weakness'),
      new Quotes (6,'When you lose someone it stays with you.Always reminding you of how easy it is to get hurt'),
      new Quotes (7,'The worst day of loving someone us the day you lose them'),
      new Quotes (8,'The day you say you started living is the day you do the thing youre mostly afraid of'),

    ]
}
