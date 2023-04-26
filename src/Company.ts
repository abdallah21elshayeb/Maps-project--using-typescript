import { faker } from '@faker-js/faker';
import { Mappable } from './customMap';

export class Company  implements Mappable{
  comanyName:string;
  catchPhrase:string;

  location : {
    lat:number;
    lng:number;
  }
  constructor() {
    this.comanyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location ={
      lat :parseFloat (faker.address.latitude()),
      lng :parseFloat (faker.address.longitude()),
    }
  }

  nameContent(): string {
    return `
    <div>
   <h1> company name : ${this.comanyName} </h1>
   <h6> catch pharse : ${this.catchPhrase} </h6>
    
    </div>
    `
  }
}