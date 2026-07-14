import { faker } from "@faker-js/faker";
export class Randomdatautils{
    static getFirstname(){
        return faker.person.firstName();
    }
    static getLastName(){
        return faker.person.lastName();
    }
    static getPassword():string{
        return faker.internet.password({length:faker.number.int({min:8,max:30}),pattern:/[A-Za-z1-9@4#%*]/});
        

    }
    static getDateOfBirth()
    {
        return faker.date.birthdate();

    }
    

}