import { Injectable } from '@angular/core';
import { Certificate } from '../models/certificate.model';
import { certificates } from '../app.datasource';
import { CrewMember } from '../models/crewMember.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor() { }
  certificates: Certificate[] = [];
  
  getCertificates(): Certificate[]{
    return certificates;
  }

  

  

}
