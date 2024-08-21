import { Component } from '@angular/core';
import { CrewCreateFormComponent } from '../../crew-create-form.component';
import { CertificateListComponent } from '../../../certificate-list/certificate-list.component';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-create-form-view',
  standalone: true,
  imports: [CrewCreateFormComponent,CertificateListComponent,MatCardModule],
  templateUrl: './create-form-view.component.html',
  styleUrl: './create-form-view.component.css'
})
export class CreateFormViewComponent {

}
