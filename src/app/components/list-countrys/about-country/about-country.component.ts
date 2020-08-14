import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { CountryModel } from 'src/app/Models/country.model';

@Component({
  selector: 'app-about-country',
  templateUrl: './about-country.component.html',
  styleUrls: ['./about-country.component.css']
})
export class AboutCountryComponent implements OnInit {

  @Input() aboutElement:CountryModel;
  @Input() open:boolean;
  @Output() close:EventEmitter<boolean>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openWindow()
  {
    let classes={
      'open-window':this.open==true,
      'closed-window':this.open==false
    };
    return classes;
  }

  
  closeWindow()
  {
    this.close.emit(false);
  }

}
