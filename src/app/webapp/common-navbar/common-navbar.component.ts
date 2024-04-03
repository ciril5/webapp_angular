import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-navbar',
  standalone: true,
  imports: [],
  templateUrl: './common-navbar.component.html',
  styleUrl: './common-navbar.component.css'
})
export class CommonNavbarComponent {

  noAction='invalid';

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

  onLogo(){
    this.router.navigate(['./webapp/services/branding'])
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
