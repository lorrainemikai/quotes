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
  newQuote=new Quotes (0,'','',0,0,new Date())
  @Output() addQuote=new EventEmitter<Quote>();
  submitQuote(newEntry){
    var entry = new Quotes(newEntry.value.id++,newEntry.value.name,newEntry.value.description,0,0,new Date())
    this.addQuote.emit(newEntry.entry); 
    console.log(entry) 
  }

  constructor() { 
   }
  ngOnInit() {
  }

}
