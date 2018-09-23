import { Component, OnInit } from '@angular/core';
import { Project } from './../models/project.model';
import { AdminService } from './../services/admin.service';
import { PortfolioService } from './../services/portfolio.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminService, PortfolioService]
})
export class AdminComponent implements OnInit {
  private loggedIn: Boolean;
  user;
  projects: FirebaseListObservable<any[]>;
  selectedProject;
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  showDeleteForm: boolean = false;


  constructor(public adminService: AdminService, public portfolioService: PortfolioService) {
    this.adminService.user.subscribe(user => {
      if (user == null) {
        this.loggedIn = false;
      } else {
        this.loggedIn = true;
      }
    })
  }

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
  }

  toggleAddForm() {
    this.hideAllForms();
    this.showAddForm = !this.showAddForm;
  }

  toggleEditForm() {
    this.hideAllForms();
    this.selectedProject = null;
    this.showEditForm = !this.showEditForm;
  }

  toggleDeleteForm() {
    this.hideAllForms();
    this.showDeleteForm = !this.showDeleteForm;
  }

  hideAllForms() {
    this.showAddForm = false;
    this.showEditForm = false;
    this.showDeleteForm = false;
  }

  editProject(projectToEdit) {
    this.selectedProject = projectToEdit;
  }

  cancelEdit() {
    this.selectedProject = null;
  }

  createProject(name: string, url: string, image: string, skills: string[], description: string) {
    const newProject: Project = new Project(name, url, image, skills, description);
    this.portfolioService.addProject(newProject);
    this.hideAllForms();
  }

  updateProject(projectToUpdate) {
    this.portfolioService.updateProject(projectToUpdate);
    this.cancelEdit();
  }

  deleteProject(projectToDelete) {
    if (confirm("Are you sure you want to delete this project?")) {
      this.portfolioService.deleteProject(projectToDelete);
    }
  }

  login(email: string, password: string) {
    this.adminService.login(email, password);
  }

  logout() {
    this.adminService.logout();
  }

}
