import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommandListComponent } from './command-list/command-list.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { DocumentListComponent } from './document-list/document-list.component';

const routes: Routes = [
  { path: '', component: CommandListComponent },
  { path: 'command-list', component: CommandListComponent },
  { path: 'command/:parameter', component: CommandListComponent },
  { path: 'document-list', component: DocumentListComponent },
  { path: 'document/:documentID', component: DocumentListComponent },
  { path: 'process-list', component: ProcessListComponent },
  { path: 'process/:processID', component: ProcessListComponent},
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
