import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-informationform',
  templateUrl: './informationform.component.html',
  styleUrls: ['./informationform.component.css']
})
export class InformationformComponent implements OnInit {
  list : Array<FormGroup>=[];

  public profileForm = new FormGroup({
    name:new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),

  });

  constructor() {
    
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.list.push(this.profileForm);
  }

}
