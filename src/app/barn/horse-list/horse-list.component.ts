import { Component, OnInit } from '@angular/core';
import { Horse } from '../horse.model';
import { Subscription} from 'rxjs';
import { MOCKHORSES } from '../MOCKHORSES';


@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrl: './horse-list.component.css'
})
export class HorseListComponent implements OnInit {
  horses: Horse[] = []
  subscription: Subscription;
  constructor(){
    this.horses = MOCKHORSES;
  }
  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
  term:string = '';

  search(value: string) {

    this.term = value;
    
    }

}
