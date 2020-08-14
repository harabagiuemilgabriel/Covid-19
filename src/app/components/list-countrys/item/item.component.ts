import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CountryModel } from '../../../Models/country.model';
import { SortService } from '../../../services/sort.service';
import { AboutService } from '../../../services/about/about.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  countrys:CountryModel[];
  filter:CountryModel[];
  aboutElement:CountryModel;
  open:boolean;

  constructor(private service:ApiService,private sort:SortService,private about:AboutService) { }

  ngOnInit(): void {
    this.service.getCountrysInformations().subscribe(data=>{
      this.filter=data;
      this.countrys=this.filter;
    });
  }

  filterByCasesToday():void
  {
    this.countrys=this.sort.sortCountrysByInfectedToday(this.countrys);
  }
  filterByDeathsToday():void
  {
    this.countrys=this.sort.sortCountrysByDeathsToday(this.countrys);
  }

  filterByCasesTodayDec():void
  {
    this.countrys=this.sort.sortCountrysByInfectedTodayDec(this.countrys);
  }
  filterByDeathsTodayDec():void
  {
    this.countrys=this.sort.sortCountrysByDeathsTodayDec(this.countrys);
  }


  SearchCountry(name:string):void
  {
     this.countrys=[];
     if(name=='')
     {
       this.countrys=this.filter;
     }
     else
    {
      for(let i=0;i<this.filter.length;i++)
      {
        if(this.filter[i].country.toLowerCase().startsWith(name.toLowerCase()))
        {
          this.countrys.push(this.filter[i]);
        }
      }
    }
  }

  openWindow(data:boolean):void
  {
    this.open=data;
  }

  addAbout(data:CountryModel):void
  {
    this.aboutElement=data;
  }

  closeWindow(data:boolean):void
  {
    this.open=data;
  }

 

}
