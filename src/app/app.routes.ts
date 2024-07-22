import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {WinComponent} from "./pages/win/win.component";
import {GoodTeacherComponent} from "./pages/good-teacher/good-teacher.component";
import {BadTeacherComponent} from "./pages/bad-teacher/bad-teacher.component";
import {LoseComponent} from "./pages/lose/lose.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'win', component: WinComponent},
  {path: 'lose', component: LoseComponent},
  {path: 'good-teacher', component: GoodTeacherComponent},
  {path: 'bad-teacher', component: BadTeacherComponent},
];
