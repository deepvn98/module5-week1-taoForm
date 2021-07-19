import { FormGroup } from '@angular/forms';

  import { Injectable } from '@angular/core';
  import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationdeviceService {

  // constructor( private is : Iuser) { 
  // }
  constructor(private form :FormGroup){
    

  }
}
