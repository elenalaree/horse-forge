import { Component, OnInit } from '@angular/core';
import { BreedService } from '../breeds.service'; 
import { Breed } from '../breeds.model'; 

@Component({
  selector: 'app-featured-breed',
  templateUrl: './featured-breed.component.html',
  styleUrls: ['./featured-breed.component.css']
})
export class FeaturedBreedComponent implements OnInit {
  breed: Breed | null = null;

  constructor(private breedService: BreedService) {}

  ngOnInit(): void {
    this.loadRandomBreed();
  }

  loadRandomBreed(): void {
    this.breedService.getRandomBreed().subscribe(
      (randomBreed: Breed | null) => {
        if (randomBreed) {
          console.log('Random Breed:', randomBreed);
          this.breed = randomBreed;
        } else {
          console.log('No breeds found');
        }
      },
      (error) => {
        console.error('Error fetching breeds:', error);
      }
    );
  }
}
