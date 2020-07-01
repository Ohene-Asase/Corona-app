import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase'
import * as firebase from 'firebase/app'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  errorMessage: any;

  constructor(private router: Router, private fb:FormBuilder, private af: AngularFireAuth) { 
    this.loginForm = fb.group({
      email: ['', Validators.email],
      password:''
    })
  } 
  

                
  ngOnInit(){
  }

 async Login(formData:any){
   const res = await this.af.signInWithEmailAndPassword(formData.email, formData.password)
   .then((res) => {
    this.router.navigate(['/main'])
   }).catch((error) => {this.errorMessage = error.message
     console.log(error.message)
   })
  
 }

  async googleLogin(){
  const res = await this.af.signInWithPopup(new auth.GoogleAuthProvider())
  .then((res) => {
    this.router.navigate(['./main'])
  }).catch (error => this.errorMessage = error.message)
}
 

}
