import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 

  constructor(public router:Router){}


  onServices(){
    this.router.navigate(['/webapp/services'])
  }

}
