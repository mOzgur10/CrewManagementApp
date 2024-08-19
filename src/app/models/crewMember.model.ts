import { Certificate } from './certificate.model';

export class CrewMember {
    id:number;
  firstName: string;
  lastName: string;
  nationality: string;
  title: string;
  daysOnBoard: number;
  dailyRate: number;
  currency: string;
  certificates: Certificate[]; 

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    nationality: string,
    title: string,
    daysOnBoard: number,
    dailyRate: number,
    currency: string,
    certificates: Certificate[]  
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.title = title;
    this.daysOnBoard = daysOnBoard;
    this.dailyRate = dailyRate;
    this.currency = currency;
    this.certificates = certificates;
  }
}