import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BarnComponent } from './barn/barn.component';
import { HorseEditComponent } from './barn/horse-edit/horse-edit.component';
import { HorseDetailComponent } from './barn/horse-detail/horse-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'myBarn', component: BarnComponent},
  { path: 'myBarn/new', component: HorseEditComponent },
  { path: 'myBarn/:id', component: HorseDetailComponent },
  { path: 'myBarn/:id/edit', component: HorseEditComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
