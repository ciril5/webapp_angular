import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrandingComponent } from './services/branding/branding.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'branding',component:BrandingComponent},
  {path:'career',component:CareerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebappRoutingModule { }
