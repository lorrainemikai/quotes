import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  poll:number;
  @Input () quote:Quote;
  vote=0
  newQuote=new Quotes (0,'','');

  constructor() { 
    this.vote=0;
   }
   LikeVote ():boolean{
     this.vote +=1
     return false ;
   }
   HateVote():boolean{
     this.vote -=1
     return false ;
   }
  ngOnInit() {
  }

}
