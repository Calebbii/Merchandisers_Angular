import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !:FormGroup
  constructor(private formBuilder : FormBuilder,private http : HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required]
    })
  }
  register(){
        this.http.post<any>("http://localhost:3000/registerUsers",this.registerForm.value)
        .subscribe(res=>{
          alert("Register Successfull");
          this.registerForm.reset();
          this.router.navigate(['login']);
        },err=>{
          alert("Something went wrong")
        })
  }

}