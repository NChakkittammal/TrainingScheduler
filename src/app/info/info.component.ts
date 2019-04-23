import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  //styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {

  constructor() { }

  InfoForm = new FormGroup(
    {
      name: new FormControl(),
      lastname: new FormControl('',Validators.required),
    });
  ngOnInit() {}
  //updateValue(): void {
    //this.name.setValue('Hello')
    save(): void{
      console.log(this.InfoForm.value);
    }
  }

