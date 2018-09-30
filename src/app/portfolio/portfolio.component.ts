import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { PortfolioService } from '../services/portfolio.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown } from 'ng-animate';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService],
  animations: [
    trigger('fadeInDown', [transition('void => *', useAnimation(fadeInDown))])
  ]
})
export class PortfolioComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  selectedSkill: string = "all";

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
  }

  getSkills(project) {
    return project.skills;
  }

  onChange(selectedSkill) {
    this.selectedSkill = selectedSkill;
  }
}
