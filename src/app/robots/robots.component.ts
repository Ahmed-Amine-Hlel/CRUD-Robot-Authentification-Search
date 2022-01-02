import { Component, OnInit } from '@angular/core';
import { Robot } from '../model/robot.model';
import { RobotService } from '../services/robot.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css'],
})
export class RobotsComponent implements OnInit {
  robots: Robot[]; //un tableau de chînes de caractères

  constructor(
    private robotService: RobotService,
    private router: Router,
    public authService: AuthService
  ) {
    this.robots = robotService.listeRobots();
  }

  ngOnInit(): void {}

  supprimerRobot(prod: Robot) {
    //console.log(prod);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.robotService.supprimerRobot(prod);
  }
}
