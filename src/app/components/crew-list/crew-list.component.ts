import { Component,OnInit ,ViewChild} from '@angular/core';
import { CrewMemberService } from '../../services/crew-member.service';
import { CrewMember } from '../../models/crewMember.model';
import { CrewCreateFormComponent } from '../crew-create-form/crew-create-form.component';
import { CertificateListComponent } from '../certificate-list/certificate-list.component';
import { Router  } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogConfig } from '@angular/cdk/dialog';
import { CreateFormViewComponent } from '../crew-create-form/view/create-form-view/create-form-view.component';
import { CrewCardPageComponent } from '../crew-card-page/crew-card-page.component';



//import { MatPaginatorModule } from '@angular/material/paginator';
//import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-crew-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterOutlet],
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.css'
})
export class CrewListComponent implements OnInit {
  @ViewChild(MatTable) myTable!: MatTable<any>;
  
  crewMembers: CrewMember[] =  [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'currency','details','edit','delete'];

  constructor(private router: Router,private crewMemberService: CrewMemberService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.crewMembers = this.crewMemberService.getCrewMembers();
    console.log(this.crewMembers);
    
  }
  viewDetails(id: string): void {
    this.router.navigate(['/crew-member', id]);
    
  }

  onDelete(id:number):void{
    this.crewMemberService.deleteCrewMembers(id);
    this.myTable.renderRows();
  }
  

  onCreate():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    const dialogRef = this.dialog.open(CreateFormViewComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.crewMembers = this.crewMemberService.getCrewMembers();
      this.myTable.renderRows();
    });
  }

  onEdit(crewMember: CrewMember):void{

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "80%";
    dialogConfig.data = crewMember;
    this.dialog.open(CertificateListComponent, dialogConfig);

  }
}
