import { Component, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChildren(ChildComponent) childComponents!: QueryList<ChildComponent>;


  usrInput: string = 'asdf'

  getData() {
    this.childComponents.forEach((child) => console.log(child.getValue()));
  }
}
