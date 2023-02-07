import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(public formBuilder:FormBuilder) { }
  title='angCare';
  submitted=false;
  name:string='';
  registerForm:FormGroup=new FormGroup({});
    ontyping(event:Event) {
     
    this.name = (<HTMLInputElement>event.target).value;
    console.log(this.name);
  }
  
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date:['',Validators.required]
    });
  }
  get f(){return this.registerForm.controls;}

  onSubmit(){
    this.submitted=true;
    console.log(this.registerForm.value)
    if (this.registerForm.invalid) {
      return;
}
alert('Your request has been submitted for approval')
}
}
