import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breed } from './breeds.model';
import { BreedService } from './breeds.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private breeds: Breed[] = []
  private breedSub: Subscription;

  constructor(public breedService: BreedService){}

  ngOnInit(){
    this.breedService.getRandomBreed();
  }
}
