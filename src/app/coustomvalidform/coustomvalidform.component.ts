import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import{NgForm}from '@angular/forms';
@Component({
  selector: 'app-coustomvalidform',
  templateUrl: './coustomvalidform.component.html',
  styleUrls: ['./coustomvalidform.component.css']
})
export class CoustomvalidformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
submit(form:any){
  var firstName=form.firstName;
  console.log(firstName);

  var lastName = form.lastName;
  console.log(lastName);

  var comment = form.comment;
  console.log(comment);
  alert("done");
}

}
