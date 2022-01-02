import { Component, OnInit } from '@angular/core';
import { RobotService } from '../services/robot.service';
import { Robot } from '../model/robot.model';
import { Classification } from '../model/classification';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-classification',
  templateUrl: './recherche-par-classification.component.html',
  styles: [],
})
export class RechercheParClassificationComponent implements OnInit {
  robots!: Robot[];
  classifications!: Classification[];
  IdClassification!: string;

  constructor(
    private robotService: RobotService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.classifications = this.robotService.listeClassifications();
    this.robots = this.robotService.listeRobots();
  }
  onChange() {
    console.log(this.IdClassification);
    this.robots = this.robotService
      .listeRobots()
      .filter((robot) =>
        robot.nomRobot.toLowerCase().includes(this.IdClassification)
      );
    console.log(this.robots);
    /* this.robots = this.robotService.rechercherParClassification(
      this.IdClassification
    );*/
  }
  supprimerRobot(prod: Robot) {
    //console.log(prod);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.robotService.supprimerRobot(prod);
      //    this.robots = this.robotService.rechercherParClassification(
      //   this.IdClassification
      // );
    }
  }
}
