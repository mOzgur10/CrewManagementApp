import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewListComponent } from './components/crew-list/crew-list.component'; 
import { CrewCardPageComponent } from './components/crew-card-page/crew-card-page.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrewListComponent,CrewCardPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
