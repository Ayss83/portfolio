import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  languages;
  _subscription;

  constructor(
    private languagesService: LanguagesService
  ) {
    this._subscription = languagesService.languageChange.subscribe(() => {
      this.languages = languagesService.getContent();
    })
   }

  ngOnInit() {
    this.languages = this.languagesService.getContent();
  }

}
