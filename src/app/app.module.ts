import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommandListComponent } from './command-list/command-list.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { DocumentListComponent } from './document-list/document-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CommandListComponent,
    ProcessListComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
