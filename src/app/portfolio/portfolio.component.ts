import { Component, OnInit } from '@angular/core';
import { Projects } from '../models/projects.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projects: object[] = Projects;


  getSkills(project) {
    return project.skills;
  }
}
