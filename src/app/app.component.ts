import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewListComponent } from "./crew-list/crew-list.component";
import { CertificateListComponent } from "./certificate-list/certificate-list/certificate-list.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrewListComponent, CertificateListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
