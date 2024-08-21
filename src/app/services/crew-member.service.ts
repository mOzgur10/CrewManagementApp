import { Injectable } from '@angular/core';
import { CrewMember } from '../models/crewMember.model';
import { crewMembers} from '../app.datasource';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CrewMemberService {

  

  constructor() { }

  getCrewMembers(): CrewMember[] {
    return crewMembers;
  }
  getCrewMemberById(id: number): CrewMember | undefined {
    return crewMembers.find(member => member.id == id);
  }

  deleteCrewMembers(id: number):void{
    const index = crewMembers.findIndex(member => member.id === id);
    crewMembers.splice(index, 1);
  }

  getCrewMemberCertificates(crew : CrewMember) : Certificate[]{
    return crew.certificates;
  }

  addCrewMember(crewMember: CrewMember): void {
    crewMembers.push(crewMember);
    console.log('Crew Member added:', crewMember);
    console.log('Current Crew Members:', crewMembers);
  }

}
