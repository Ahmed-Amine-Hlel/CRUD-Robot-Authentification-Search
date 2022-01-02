import { Classification } from './../model/classification';
import { Injectable } from '@angular/core';
import { Robot } from '../model/robot.model';
@Injectable({
  providedIn: 'root',
})
export class RobotService {
  robots: Robot[];
  classifications: Classification[];
  robot?: Robot;
  robotsRecherche!: Robot[];
  classification = new Classification();
  constructor() {
    this.classifications = [
      { idCla: 1, nomCla: 'ROBOT ÉDUCATIF' },
      { idCla: 2, nomCla: 'ROBOT MOBILE' },
      { idCla: 3, nomCla: 'ROBOT HUMANOÏDE' },
      { idCla: 4, nomCla: 'ROBOT COLLABORATIF' },
      { idCla: 5, nomCla: 'DRONE' },
    ];
    this.robots = [
      {
        idRobot: 1,
        nomRobot: 'GERTY',
        nomDev: 'Outrider',
        prixRobot: 4000,
        dateCreation: new Date('01/14/2011'),
        classification: { idCla: 3, nomCla: 'ROBOT HUMANOÏDE' },
      },
      {
        idRobot: 2,
        nomRobot: 'Mega Man',
        nomDev: 'Nuro',
        prixRobot: 1200,
        dateCreation: new Date('12/17/2010'),
        classification: { idCla: 1, nomCla: 'ROBOT ÉDUCATIF' },
      },
      {
        idRobot: 3,
        nomRobot: 'The Tachikomas',
        nomDev: 'Righthand Robotics',
        prixRobot: 3550,
        dateCreation: new Date('02/20/2020'),
        classification: { idCla: 5, nomCla: 'DRONE' },
      },
      {
        idRobot: 4,
        nomRobot: 'Abyroid',
        nomDev: 'Shapeways',
        prixRobot: 1700,
        dateCreation: new Date('05/30/2017'),
        classification: { idCla: 5, nomCla: 'DRONE' },
      },
      {
        idRobot: 5,
        nomRobot: 'Ifos',
        nomDev: 'Applied Aeronautics',
        prixRobot: 4270,
        dateCreation: new Date('11/08/2000'),
        classification: { idCla: 5, nomCla: 'DRONE' },
      },
      {
        idRobot: 6,
        nomRobot: 'Hammer',
        nomDev: 'Vicarious',
        prixRobot: 2280,
        dateCreation: new Date('09/24/2022'),
        classification: { idCla: 2, nomCla: 'ROBOT MOBILE' },
      },
    ];
  }
  listeRobots(): Robot[] {
    return this.robots;
  }
  ajouterRobot(prod: Robot) {
    prod.idRobot = this.robots.length + 1;
    this.robots.push(prod);
  }
  supprimerRobot(prod: Robot) {
    const index = this.robots.indexOf(prod, 0);
    if (index > -1) {
      this.robots.splice(index, 1);
    }
  }

  consulterRobot(id: number): Robot | undefined {
    return (this.robot = this.robots.find((p) => p.idRobot == id));
  }

  updateRobot(p: Robot) {
    this.supprimerRobot(p);
    this.ajouterRobot(p);
    this.trierRobots();
  }

  trierRobots() {
    this.robots = this.robots.sort((n1, n2) => {
      if (n1.idRobot > n2.idRobot) {
        return 1;
      }
      if (n1.idRobot < n2.idRobot) {
        return -1;
      }
      return 0;
    });
  }

  listeClassifications(): Classification[] {
    return this.classifications;
  }

  consulterClassification(id: number): Classification {
    this.classification = this.classifications.find((cla) => cla.idCla == id)!;
    return this.classification;
  }

  rechercherParClassification(idCla: number): Robot[] {
    this.robotsRecherche = [];
    this.robots.forEach((cur, index) => {
      if (idCla == cur.classification.idCla) {
        console.log('cur ' + cur);
        this.robotsRecherche.push(cur);
      }
    });
    return this.robotsRecherche;
  }
}
