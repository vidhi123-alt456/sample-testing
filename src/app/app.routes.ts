import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { MissionComponent } from '../mission/mission.component';
import { MissionApplicationComponent } from '../mission-application/mission-application.component';
import { MissionSkillsComponent } from '../mission-skills/mission-skills.component';
import { MissionThemeComponent } from '../mission-theme/mission-theme.component';
import { EmptyDashboardComponent } from '../empty-dashboard/empty-dashboard.component';
import { AuthGuard } from '../Services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'user', component: UserComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'mission-application', component: MissionApplicationComponent },
      { path: 'mission-skills', component: MissionSkillsComponent },
      { path: 'mission-theme', component: MissionThemeComponent },
      { path: '', component: EmptyDashboardComponent, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
