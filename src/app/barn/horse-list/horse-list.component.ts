import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Horse } from '../horse.model';
import { HorseService } from '../horses.service';

@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrls: ['./horse-list.component.css']
})
export class HorseListComponent implements OnInit, OnDestroy {
  horses: Horse[] = [];
  subscription: Subscription = new Subscription();
  term: string = '';

  constructor(private horseService: HorseService) {}

  ngOnInit(): void {
    // Fetch the list of horses
    this.subscription.add(
      this.horseService.getHorses().subscribe(
        (horses: Horse[]) => {
          this.horses = horses;
        },
        (error) => {
          console.error('Error fetching horses:', error);
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search(value: string) {
    this.term = value;
  }
}
