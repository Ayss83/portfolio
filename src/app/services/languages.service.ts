import { Injectable } from '@angular/core';

import { languages } from '../languages/languages';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LanguagesService {
  language: string = "french";
  languageChange: Subject<string> = new Subject<string>();

  constructor(
    
  ) { }


  getContent() : Object {
    return languages[this.language];
  }

  setLanguage(chosen: string) : void {
    if(chosen !== this.language) {
      this.language = chosen;
      this.languageChange.next(this.language);
    }
  }
}
