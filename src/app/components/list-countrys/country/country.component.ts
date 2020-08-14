import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { CountryModel } from 'src/app/Models/country.model';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

@Input() country:CountryModel;
@Output() addAbout:EventEmitter<CountryModel>=new EventEmitter();
@Output() openWindow:EventEmitter<boolean>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  
  }
  
  CreateAbout(data)
  {
    var index =data.__ngContext__[8].index;
    this.addAbout.emit(this.country);
    this.openWindow.emit(true);
  }
}
