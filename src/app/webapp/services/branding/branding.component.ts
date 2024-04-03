import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../../common-navbar/common-navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [CommonNavbarComponent,FooterComponent],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.css'
})
export class BrandingComponent {

}
