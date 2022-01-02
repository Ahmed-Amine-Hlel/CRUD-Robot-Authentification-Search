import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from '../model/robot.model';
import { RobotService } from '../services/robot.service';
import { Classification } from '../model/classification';

@Component({
  selector: 'app-add-robot',
  templateUrl: './add-robot.component.html',
  styleUrls: ['./add-robot.component.css'],
})
export class AddRobotComponent implements OnInit {
  newRobot = new Robot();
  //msg!: String;
  classifications!: Classification[];
  newIdCla!: number;
  newClassification!: Classification;

  constructor(private robotService: RobotService, private router: Router) {}

  ngOnInit(): void {
    this.classifications = this.robotService.listeClassifications();
  }

  addRobot() {
    this.newClassification = this.robotService.consulterClassification(
      this.newIdCla
    );
    this.newRobot.classification = this.newClassification;
    this.robotService.ajouterRobot(this.newRobot);
    //this.msg = 'Robot ' + this.newRobot.nomRobot + ' ajouté avec succès';
    // this.robotService.ajouterRobot(this.newRobot);
    this.router.navigate(['/robots']);
  }
}
