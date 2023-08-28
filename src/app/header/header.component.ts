import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'headercomponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() contactClicked = new EventEmitter<boolean>();
  @Output() homeClicked = new EventEmitter<boolean>();

  contactEmitEvent() {
    this.contactClicked.emit(true);
  }
  homeEmitEvent() {
    this.homeClicked.emit(false);
  }
}
