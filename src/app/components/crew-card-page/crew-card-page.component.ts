import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrewMemberService } from '../../services/crew-member.service'; 
import { CrewMember } from '../../models/crewMember.model';
import { Certificate } from '../../models/certificate.model'; 
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-crew-card-page',
  standalone: true,
  imports: [MatCardModule,TranslateModule],
  templateUrl: './crew-card-page.component.html',
  styleUrl: './crew-card-page.component.css'
})
export class CrewCardPageComponent implements OnInit {
  crewMember: CrewMember | undefined;
  certificates: Certificate[] = [];

  constructor(
    private route: ActivatedRoute,
    private crewMemberService: CrewMemberService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.crewMember = this.crewMemberService.getCrewMembers().find(member => member.id === +id);
        if (this.crewMember) {
          this.certificates = this.crewMemberService.getCrewMemberCertificates(this.crewMember);
        }
      }
    });
  }

}