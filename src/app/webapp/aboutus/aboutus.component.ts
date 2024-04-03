import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../common-navbar/common-navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonNavbarComponent,FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
