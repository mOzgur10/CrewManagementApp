import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewMemberService } from '../services/crew-member.service';
import { CrewMember } from '../models/crewMember.model';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-crew-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.css'
})
export class CrewListComponent implements OnInit {
  crewMembers: CrewMember[] =  [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency'];


  constructor(private crewMemberService: CrewMemberService) {}

  ngOnInit(): void {
    this.crewMembers = this.crewMemberService.getCrewMembers();
    
  }
}
