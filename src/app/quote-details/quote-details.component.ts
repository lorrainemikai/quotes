import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import {Quotes}from '../quotes'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() myQuotes:Quotes
  @Output() isCompelete = new EventEmitter <boolean>();

  goalCompelete(compelete:boolean){
    this.isCompelete.emit(compelete);
  }

  constructor() { }

  ngOnInit() {
  }

}
