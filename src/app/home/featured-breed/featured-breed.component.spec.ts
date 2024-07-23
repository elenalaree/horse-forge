import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBreedComponent } from './featured-breed.component';

describe('FeaturedBreedComponent', () => {
  let component: FeaturedBreedComponent;
  let fixture: ComponentFixture<FeaturedBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedBreedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
