import { Component, OnInit } from '@angular/core';
import { Horse } from './horse.model';

@Component({
  selector: 'app-barn',
  templateUrl: './barn.component.html',
  styleUrl: './barn.component.css'
})
export class BarnComponent implements OnInit {
  selectedHorse: Horse;
  constructor() { }

  ngOnInit() {
  }
}
