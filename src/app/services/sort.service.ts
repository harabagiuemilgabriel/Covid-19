import { Injectable } from '@angular/core';
import { CountryModel } from '../Models/country.model'

@Injectable({
  providedIn: 'root'
})
export class SortService {



  constructor() { }


  sortCountrysByInfectedToday(countrys:CountryModel[]):CountryModel[]
  {
    for(let i=0;i<countrys.length;i++)
    {
      for(let j=i;j<countrys.length;j++)
      {
        if(countrys[i].todayCases<countrys[j].todayCases)
        {
          let temp=countrys[i];
          countrys[i]=countrys[j];
          countrys[j]=temp;
        }
      }
    }
    return countrys;
  }


  sortCountrysByDeathsToday(countrys:CountryModel[]):CountryModel[]
  {
    for(let i=0;i<countrys.length;i++)
    {
      for(let j=i;j<countrys.length;j++)
      {
        if(countrys[i].todayDeaths<countrys[j].todayDeaths)
        {
          let temp=countrys[i];
          countrys[i]=countrys[j];
          countrys[j]=temp;
        }
      }
    }
    return countrys;
  }


  sortCountrysByInfectedTodayDec(countrys:CountryModel[]):CountryModel[]
  {
    for(let i=0;i<countrys.length;i++)
    {
      for(let j=i;j<countrys.length;j++)
      {
        if(countrys[i].todayCases>countrys[j].todayCases)
        {
          let temp=countrys[i];
          countrys[i]=countrys[j];
          countrys[j]=temp;
        }
      }
    }
    return countrys;
  }


  sortCountrysByDeathsTodayDec(countrys:CountryModel[]):CountryModel[]
  {
    for(let i=0;i<countrys.length;i++)
    {
      for(let j=i;j<countrys.length;j++)
      {
        if(countrys[i].todayDeaths>countrys[j].todayDeaths)
        {
          let temp=countrys[i];
          countrys[i]=countrys[j];
          countrys[j]=temp;
        }
      }
    }
    return countrys;
  }

}
