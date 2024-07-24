import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseService } from '../horses.service';
import { Horse } from '../horse.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-horse-edit',
  templateUrl: './horse-edit.component.html',
  styleUrls: ['./horse-edit.component.css']
})
export class HorseEditComponent implements OnInit {
  horse: Horse = {
    name: '',
    height: '',
    age: '',
    weight: '',
    breed: '',
    color: '',
    gender: '',
    imageUrl: ''
  };

  constructor(
    private horseService: HorseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.horseService.getHorseById(id).subscribe(horse => this.horse = horse);
    }
  }

  onSubmit(form: NgForm): void {
    if (this.horse.id) {
      this.horseService.updateHorse(this.horse.id, this.horse).subscribe(() => {
        this.router.navigate(['/myBarn']);
      });
    } else {
      this.horseService.createHorse(this.horse).subscribe(() => {
        this.router.navigate(['/myBarn']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/myBarn']);
  }
}
