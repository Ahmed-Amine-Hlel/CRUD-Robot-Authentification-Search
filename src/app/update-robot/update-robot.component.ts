import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classification } from '../model/classification';
import { Robot } from '../model/robot.model';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-update-robot',
  templateUrl: './update-robot.component.html',
  styles: [],
})
export class UpdateRobotComponent implements OnInit {
  isLoading: boolean = true;
  currentRobot?: Robot;
  classifications!: Classification[];
  updatedClassification!: Classification;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private robotService: RobotService
  ) {}

  ngOnInit(): void {
    this.classifications = this.robotService.listeClassifications();
    console.log(this.activatedRoute.snapshot.params.id);
    this.currentRobot = this.robotService.consulterRobot(
      this.activatedRoute.snapshot.params.id
    );
    console.log(this.currentRobot);
    this.isLoading = false;
  }

  updateRobot() {
    this.updatedClassification = this.robotService.consulterClassification(
      this.currentRobot!.classification.idCla
    );
    this.currentRobot!.classification = this.updatedClassification;
    this.robotService.updateRobot(this.currentRobot!);
    this.router.navigate(['robots']);
  }
}
