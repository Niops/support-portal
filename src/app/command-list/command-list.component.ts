import { Component, OnInit } from '@angular/core';

import { COMMANDS } from '../../assets/commands';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {
  commands = COMMANDS;

  constructor() { }

  ngOnInit() {
  }

}
