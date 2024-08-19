import { Injectable } from '@angular/core';
import { CrewMember } from '../models/crewMember.model';
import { crewMembers } from '../app.datasource';

@Injectable({
  providedIn: 'root'
})
export class CrewMemberService {

  constructor() { }

  getCrewMembers(): CrewMember[] {
    return crewMembers;
  }

}
