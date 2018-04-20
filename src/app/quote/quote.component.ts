import { Component, OnInit } from '@angular/core';
import{ Quotes}from '../quotes'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quotes (1,'I dont trust easily but when i trust you dont make me regret it.','BY IAN SOMEHALDER~VD',0,0),
    new Quotes (2,'Ive been in love its painful pointless and overrated','BY IAN SOMEHALDER~VD',0,0),
    // new Quotes ( 3,'if youre going to be bad be bad with a reason or else youre not worth forgiving','BY IAN SOMEHALDER'),
    // new Quotes (4,'Our fate lives within us.We just need to be brave to see it','BY MERIDA~BRAVE'),
    // new Quotes (5,'humanity is my greatest weakness','BY NINA DOBREV~VD'),
    // new Quotes (6,'When you lose someone it stays with you.Always reminding you of how easy it is to get hurt','BY NINA DOBREV~VD'),
    // new Quotes (7,'The worst day of loving someone us the day you lose them','BY NINA DOBREV~VD'),
    // new Quotes (8,'The day you say you started living is the day you do the thing youre mostly afraid of','BY CLAIRE HOLT~VD'),

  ]
  upvote(){
    this.quotes[0].upvotes ++
  }
  downvote(){
    this.quotes[0].downvotes --
  }
  addNewQuotes(quotes){
    let quoteLength = this.quotes.length;
    quotes.id=quoteLength+1;
    this.quotes.push(quotes)
    }
  constructor() { }

  ngOnInit() {
  }

}
