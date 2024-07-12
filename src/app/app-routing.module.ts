import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BarnComponent } from './barn/barn.component';
import { HorseEditComponent } from './barn/horse-edit/horse-edit.component';
import { HorseDetailComponent } from './barn/horse-detail/horse-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent
  },
  { path: 'my-barn', component: BarnComponent, children: [
    { path: 'new', component: HorseEditComponent },
    { path: ':id', component: HorseDetailComponent },
    { path: ':id/edit', component: HorseEditComponent }
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
