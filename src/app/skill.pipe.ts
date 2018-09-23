import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './models/project.model';

@Pipe({
    name: "skillFilter",
    pure: false
})

export class SkillPipe implements PipeTransform {
    transform(input: Project[], selectedSkill: string) {
        let filteredProjects: Project[] = [];
        if (input) {
            input.forEach((project) => {
                if (project.skills.includes(selectedSkill) || selectedSkill === "all") {
                    filteredProjects.push(project)
                } else {
                    return;
                }
            })
        }
        return filteredProjects;
    }
}