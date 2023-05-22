import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees = ['Rishab', 'Abhinav', 'Likhith', 'Kedar'];
  selectedEmployee: string = '';

  onEmployeeSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.selectedEmployee = target.value;
    }
  }
}








