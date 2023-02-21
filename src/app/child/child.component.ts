import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})

export class ChildComponent {
  @ViewChild('myInput') myInput!: ElementRef;

  rand() {
    return Math.floor(Math.random()*100);
  }

  getValue() {
    const inputValue = this.myInput?.nativeElement.value;
    return inputValue
  }
}

