import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseService } from '../horses.service';
import { Horse } from '../horse.model';

@Component({
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: ['./horse-detail.component.css']
})
export class HorseDetailComponent implements OnInit {
  horse: Horse | null = null;

  constructor(
    private horseService: HorseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      if (id) {
        this.horseService.getHorseById(id).subscribe(
          (horse) => this.horse = horse,
          (error) => console.error('Error fetching horse:', error)
        );
      }
    });
  }

  onDelete(): void {
    if (this.horse) {
      this.horseService.deleteHorse(this.horse.id).subscribe(
        () => this.router.navigate(['/myBarn']),
        (error) => console.error('Error deleting horse:', error)
      );
    }
  }
}
