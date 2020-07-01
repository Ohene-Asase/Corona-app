import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.scss']
})
export class RegistorComponent implements OnInit {
  registerForm:FormGroup;
  errorMessage: any;

  constructor(private router: Router, private fb:FormBuilder, private af: AngularFireAuth ) { 
    this.registerForm = fb.group({
      email: ['', Validators.email],
      password:''
    })
  }

  ngOnInit(){
  }

async Register(formData:any){
 const res = await this.af.createUserWithEmailAndPassword(formData.email,formData.password);
 if(res){
   const loginRes =  await this.af.signInWithEmailAndPassword(formData.email, formData.password);
   if(loginRes){this.router.navigate(['/main'])}
 }

}

async googleLogin(){
  const res = await this.af.signInWithPopup(new auth.GoogleAuthProvider())
  .then((res) => {
    this.router.navigate(['/main'])
  }).catch(error => this.errorMessage = error.message)
}


}
