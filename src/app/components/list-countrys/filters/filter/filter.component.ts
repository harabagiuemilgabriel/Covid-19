import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../../item/item.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  name:string='';
  filterByCases:number=0;
  filterByDeaths:number=0;

  constructor(private sortBy:ItemComponent) { }

  ngOnInit(): void {
  }



  SearchByName():void{
    if(this.filterByCases==0)
    {
      this.sortBy.SearchCountry(this.name);
      this.sortBy.filterByCasesToday();
    }
    else if(this.filterByCases==1)
    {
      this.sortBy.SearchCountry(this.name);
      this.sortBy.filterByCasesTodayDec();
    }
    else if(this.filterByDeaths==0)
    {
      this.sortBy.SearchCountry(this.name);
      this.sortBy.filterByDeathsToday();
    }
    else if(this.filterByDeaths==1)
    {
      this.sortBy.SearchCountry(this.name);
      this.sortBy.filterByDeathsTodayDec();
    }
  }

  filterByCasesToday():void
  {
    this.filterByCases++;
    this.filterByDeaths=0;
    if(this.filterByCases>1)
    {
      this.filterByCases=0;
    }
    if(this.filterByCases==0)
    {
      this.sortBy.filterByCasesToday();
    }
    else if(this.filterByCases==1)
    {
      this.sortBy.filterByCasesTodayDec();
    }
    
    console.log(this.filterByCases,this.filterByDeaths);
  }
  filterByDeathsToday():void
  {
    this.filterByDeaths++;
    this.filterByCases=0;
    if(this.filterByDeaths>1)
    {
      this.filterByDeaths=0;
    }
    if(this.filterByDeaths==0)
    {
      this.sortBy.filterByDeathsToday();
    }
    else if(this.filterByDeaths==1)
    {
      this.sortBy.filterByDeathsTodayDec();
    }
    console.log(this.filterByCases,this.filterByDeaths);
  }


}
