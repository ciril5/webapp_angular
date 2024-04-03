import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  emailAddess='cirilsabu@gmail.com';

constructor(public router:Router){}

  onHome(){
    // window.scrollTo({top:0,behavior:'smooth'})
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

}
