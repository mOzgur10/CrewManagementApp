import { Injectable } from '@angular/core';
import { CrewMember } from '../models/crewMember.model';
import { crewMembers } from '../app.datasource';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CrewMemberService {

  constructor() { }

  getCrewMembers(): CrewMember[] {
    return crewMembers;
  }

  getCrewMemberCertificates(crew : CrewMember) : Certificate[]{
    return crew.certificates;
  }

}
