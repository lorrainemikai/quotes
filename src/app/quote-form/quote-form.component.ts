import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Quotes } from '../quotes';
// import { Quote } from '@angular/compiler';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  // newQuotes: any;
  // newQuote=new Quotes (0,'','',0,0,new Date())
  addQuoteArr :Quotes[]
  newEntry:number=0
  @Output() addQuote=new EventEmitter<any>();

  submitQuote(newEntry){
    
    this.addQuoteArr.push(new Quotes(this.newEntry++,newEntry.value.name,newEntry.value.author,0,0,new Date()));
    this.addQuote.emit(this.addQuoteArr);

  }

  constructor() { 
    this.addQuoteArr = []
   }
  ngOnInit() {
  }

}
