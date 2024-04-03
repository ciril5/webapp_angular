import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonNavbarComponent } from '../common-navbar/common-navbar.component';
import {MatInputModule} from '@angular/material/input';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonNavbarComponent,FooterComponent,MatInputModule,ReactiveFormsModule,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formValues:any;
  email='info@gmail.com';

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.initialiseForm();

  }

  initialiseForm(){
    this.formValues=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      subject:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      message:['',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]]


    });

  }

  onclick(){
    if (this.formValues.valid) {
      console.log( this.formValues.value);
      
    }
  }
}
