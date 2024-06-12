import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = true;
  message = 'Hello, World';

  sayMessage() {
    alert(this.message);
  }
}
