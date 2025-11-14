import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { SuscribeComponent } from "../suscribe/suscribe.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-content',
  imports: [ProfileComponent, ExperienceComponent, EducationComponent, SuscribeComponent, ProjectsComponent, SkillsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
