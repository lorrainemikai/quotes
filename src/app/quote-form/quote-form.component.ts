import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuotes: any;
  poll:number;
  @Input () quote:Quote;
  vote=0
  newQuote=new Quotes (0,'','');
  @Output() addQuote=new EventEmitter<Quote>();
  submitQuote(){
    this.addQuote.emit(this.newQuotes);  }

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
