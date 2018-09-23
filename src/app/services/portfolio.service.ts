import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Project } from './../models/project.model';

@Injectable()
export class PortfolioService {

  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects')
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId)
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

  updateProject(localUpdatedProject) {
    let projectInFirebase = this.getProjectById(localUpdatedProject.$key);
    let skills;
    if (typeof localUpdatedProject.skills === "string") {
      skills = localUpdatedProject.skills.split(',')
    } else {
      skills = localUpdatedProject.skills
    }
    projectInFirebase.update({
      name: localUpdatedProject.name,
      url: localUpdatedProject.url,
      image: localUpdatedProject.image,
      skills: skills,
      description: localUpdatedProject.description
    });
  }

  deleteProject(localProjectToDelete) {
    let projectInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectInFirebase.remove();
  }
}
