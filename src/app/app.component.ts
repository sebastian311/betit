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
  activeButton: string = 'Trending'; // Default active button

  handleButtonClick(event: any) {
    this.contactPage = event;
  }

  setActive(buttonName: string) {
    this.activeButton = buttonName;
  }
  
}
