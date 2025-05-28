import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contactEmail = 'support@example.com';

  features = [
    { title: 'Home', description: 'Access announcements, schedules, and dashboards.' },
    { title: 'Profile', description: 'Update personal details, qualifications, and teaching history.' },
    { title: 'Contact Us', description: 'Reach out via support@example.com for any help or queries.' },
    { title: 'About Us', description: 'Learn more about our mission and academic values.' }
  ];


}
