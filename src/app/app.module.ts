import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { WorkComponent } from './work/work.component';
import { LanguagesService } from './services/languages.service';


@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ LanguagesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
