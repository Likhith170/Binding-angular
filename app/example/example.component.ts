import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <h1>Property Binding Example </h1>
    <input [value]="message" (input)="updateMessage($event)" placeholder="Type a message">
    <p>{{ message }}</p>
  `,
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  message: string = '';

  updateMessage(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.message = inputElement.value;
    }
  }
}

