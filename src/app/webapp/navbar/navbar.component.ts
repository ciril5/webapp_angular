import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  noAction='invalid';
  fbAddeess="https://www.facebook.com/cyril.sabu.125/";

  constructor(public router:Router){}

  onHome(){
    this.router.navigate(['./webapp/home'])

  }

  onAboutus(){
    this.router.navigate(['./webapp/aboutus'])

  }

  onServices(){
    this.router.navigate(['./webapp/services'])
  }

  onContact(){
    this.router.navigate(['./webapp/contact'])
  }

  onCareer(){
    this.router.navigate(['./webapp/career']) 
  }

  onGalary(){
    const  latest_Workwr =document.getElementById('latest_workwr')
    if (latest_Workwr) {
      latest_Workwr.scrollIntoView({behavior:'smooth',block:'start'})
      
    }

  }

}
