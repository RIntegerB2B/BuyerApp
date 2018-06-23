import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Registration} from './registration.model'
import { trigger, style, animate, transition } from '@angular/animations';
import {state} from '@angular/animations';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(200)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]
})
export class RegistrationComponent implements OnInit {

  buyerRegisterForm: FormGroup;
  userModel: Registration;
  public state = 'inactive';

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.buyerRegister();
  }
/*
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
*/
  buyerRegister() { 
    this.buyerRegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userType: ['', Validators.required],
      emailId: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  buyerSubmit(buyerRegisterForm: FormGroup) {
    // TODO: Change the userModel variable to pwdChangeReset
    this.userModel = new Registration(
      buyerRegisterForm.controls.firstName.value,
      buyerRegisterForm.controls.lastName.value,
      buyerRegisterForm.controls.userType.value,
      buyerRegisterForm.controls.emailId.value,
      buyerRegisterForm.controls.mobileNumber.value,
      buyerRegisterForm.controls.userName.value,
      buyerRegisterForm.controls.password.value,
    );
    
    this.accountService.Registration(this.userModel).subscribe(data => {
      if (data._body.length > 0) {
        this.router.navigate(['/signin']);
      }
    }, error => {
      console.log(error);
    });
  }
  }
