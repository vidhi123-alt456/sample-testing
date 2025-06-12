import { Component } from '@angular/core';

@Component({
  selector: 'app-environment',
  standalone: true,
  imports: [],
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent {
  // Component logic here if needed
}
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5155/api/User/Login' // Replace with your actual API URL
};


