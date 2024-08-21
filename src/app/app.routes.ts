import { Routes } from '@angular/router';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { CrewCardPageComponent } from './components/crew-card-page/crew-card-page.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: CrewListComponent },
    { path:  'crew-member/:id', component: CrewCardPageComponent  }, 
    { path: '**', redirectTo: '/home' } 


];
