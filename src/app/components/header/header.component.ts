import { Component,inject,OnInit } from '@angular/core';
import { TranslateModule ,TranslateService} from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  languages =['en','pt','fr'];
  private translateService = inject(TranslateService);
  ngOnInit(): void { 
      const defaultLanguage = localStorage.getItem('language') || 'fr';
      this.translateService.setDefaultLang(defaultLanguage);
      this.translateService.use(defaultLanguage);
      console.log(defaultLanguage);
  }
  switchLanguage(lang: string){
    this.translateService.use(lang);
    localStorage.setItem('language',lang);
  }
}
