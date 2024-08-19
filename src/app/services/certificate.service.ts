import { Injectable } from '@angular/core';
import { Certificate } from '../models/certificate.model';
import { certificates } from '../app.datasource';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor() { }

  getCertificates() : Certificate[]{
    return certificates;
  }

}
