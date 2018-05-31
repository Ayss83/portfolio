import { Component } from '@angular/core';
import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  languages: Object;
  _subscription;

  constructor(
    private languageService: LanguagesService
  ) {
    this.languages = languageService.getContent();
    this._subscription = languageService.languageChange.subscribe(() => {
      this.languages = languageService.getContent();
    })
  }

  setFrench() {
    this.languageService.setLanguage("french"); 
  }

  setEnglish() {
    this.languageService.setLanguage("english");   
  }
}
