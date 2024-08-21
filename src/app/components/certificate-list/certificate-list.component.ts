import { Component, Inject  } from '@angular/core';
import { Certificate } from '../../models/certificate.model';
import { CrewMemberService } from '../../services/crew-member.service';
import { CertificateService } from '../../services/certificate.service';
import { CrewMember } from '../../models/crewMember.model';
import { MatTableModule } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-certificate-list',
  standalone: true,
  imports: [MatTableModule,TranslateModule],
  templateUrl: './certificate-list.component.html',
  styleUrl: './certificate-list.component.css'
})
export class CertificateListComponent {
  certificates: Certificate[] = [];

  
  displayedColumns: string[] = [
    'id',
    'name',
    'issueDate',
    'expiryDate'
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public crewMember: CrewMember,
    private crewMemberService: CrewMemberService,private certificateService: CertificateService, private translate: TranslateService
  ) {}

  ngOnInit(): void {
    if(this.crewMember==null){
      this.certificates =this.certificateService.getCertificates();
    }else{
      this.certificates = this.crewMemberService.getCrewMemberCertificates(this.crewMember);
    }
    
  }
}
