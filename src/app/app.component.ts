import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Betit';
  isMenuOpen: boolean = false;
  contactPage: boolean = false;

  handleButtonClick(event: any) {
    this.contactPage = event;
  }
}
