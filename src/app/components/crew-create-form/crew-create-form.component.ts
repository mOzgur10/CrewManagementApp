import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrewMemberService } from '../../services/crew-member.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../models/certificate.model';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CrewMember } from '../../models/crewMember.model';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-crew-create-form',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatOptionModule,MatSelectModule,CommonModule,MatButtonModule],
  templateUrl: './crew-create-form.component.html',
  styleUrl: './crew-create-form.component.css'
})
export class CrewCreateFormComponent {
  crewForm: FormGroup;
  certificates: Certificate[] = [];

  constructor(
    private fb: FormBuilder,
    private crewMemberService: CrewMemberService,
    private certificateService: CertificateService, 
    public dialogRef: MatDialogRef<CrewCreateFormComponent> // MatDialogRef kullanımı
  ) {
    this.crewForm = this.fb.group({
      id: [null],
      firstName: [''],
      lastName: [''],
      nationality: [''],
      title: [''],
      daysOnBoard: [null],
      dailyRate: [null],
      currency: [''],
      certificates: [[]]
    });
  }
  
  ngOnInit(): void {
    this.certificates = this.certificateService.getCertificates();
  }

  onSubmit(): void {
    console.log('onsubmit');
    console.log(this.crewForm);
    if (this.crewForm.valid) {
      const formValue = this.crewForm.value;

      // Sayısal değerleri uygun türde dönüştürme
      const newCrewMember = new CrewMember(
        parseInt(formValue.id, 10), // ID'yi number tipine dönüştür
        formValue.firstName,
        formValue.lastName,
        formValue.nationality,
        formValue.title,
        parseInt(formValue.daysOnBoard, 10), // daysOnBoard'ı number tipine dönüştür
        parseFloat(formValue.dailyRate), // dailyRate'i number tipine dönüştür
        formValue.currency,
        formValue.certificates // certificates değerlerini uygun şekilde işleyin
      );
  
      this.crewMemberService.addCrewMember(newCrewMember);
      this.crewForm.reset();
      this.dialogRef.close(true);
    }
    console.log(this.crewForm.valid);
  }
}
