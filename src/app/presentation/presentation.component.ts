import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  languages;
  _subscription;

  constructor(
    private languagesService: LanguagesService
  ) { 
    this._subscription = languagesService.languageChange.subscribe(value => {
      this.languages = languagesService.getContent()
    });
  }

  ngOnInit() {
    this.languages = this.languagesService.getContent();
  }

}
