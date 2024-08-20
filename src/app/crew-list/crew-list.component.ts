import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewMemberService } from '../services/crew-member.service';
import { CertificateService } from '../services/certificate.service';
import { CrewMember } from '../models/crewMember.model';
import { CertificateListComponent } from '../certificate-list/certificate-list/certificate-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Certificate } from '../models/certificate.model';


@Component({
  selector: 'app-crew-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, CertificateListComponent],
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.css'
})
export class CrewListComponent implements OnInit {
  crewMembers: CrewMember[] =  [];
  crewMemberCertificates: Certificate[] =  [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency', 'action'];


  constructor(private crewMemberService: CrewMemberService, private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.crewMembers = this.crewMemberService.getCrewMembers();
  }

  getCertificatesByCrew(crew: CrewMember): void{
    this.crewMemberCertificates=this.crewMemberService.getCrewMemberCertificates(crew);
    
  }



    


  
  
  
}
