import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotsComponent } from './robots/robots.component';
import { AddRobotComponent } from './add-robot/add-robot.component';
import { UpdateRobotComponent } from './update-robot/update-robot.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RobotGuard } from './robot.guard';
import { RechercheParClassificationComponent } from './recherche-par-classification/recherche-par-classification.component';

const routes: Routes = [
  { path: 'robots', component: RobotsComponent },
  {
    path: 'add-robot',
    component: AddRobotComponent,
    canActivate: [RobotGuard],
  },
  {
    path: 'updateRobot/:id',
    component: UpdateRobotComponent,
    canActivate: [RobotGuard],
  },
  {
    path: 'rechercheParClassification',
    component: RechercheParClassificationComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'robots', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
