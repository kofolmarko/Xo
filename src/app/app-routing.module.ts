import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MathComponent } from './components/math/math.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tictactoe', component: TictactoeComponent },
  { path: 'math', component: MathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  TictactoeComponent,
  MathComponent
]