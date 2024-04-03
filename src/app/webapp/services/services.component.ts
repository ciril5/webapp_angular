import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../common-navbar/common-navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonNavbarComponent,FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
