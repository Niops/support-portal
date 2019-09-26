import { Component } from '@angular/core';
import { COMMANDS } from '../assets/commands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'support-portal';
  commands = COMMANDS;

}
