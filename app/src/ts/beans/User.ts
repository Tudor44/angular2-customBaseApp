export class User{
        name: string;
        surname: string;
        date : Date;
        taxcode : string;
    
  constructor(name:string, surname:string, date:Date, taxcode:string){
      this.name = name;
      this.surname = surname;
      this.date = date;
      this.taxcode = taxcode;
  }
  
  
}