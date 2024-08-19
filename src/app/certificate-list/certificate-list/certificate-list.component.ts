import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Certificate } from '../../models/certificate.model';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-certificate-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './certificate-list.component.html',
  styleUrl: './certificate-list.component.css'
})
export class CertificateListComponent implements OnInit {
  certificates : Certificate[] = [];
  displayedColumns: string[] = ['id', 'name', 'issueDate', 'expiryDate'];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificates = this.certificateService.getCertificates();
    console.log(this.certificates);
  }

}
