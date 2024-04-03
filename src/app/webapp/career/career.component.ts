import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../common-navbar/common-navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonNavbarComponent,FooterComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

}
