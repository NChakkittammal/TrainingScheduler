import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../events.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  //[x: string]: any;

  constructor(
    private eventsService: EventsService,
    private activeRoute: ActivatedRoute,    
  ) 
  {  }

  InfoForm = new FormGroup(
    {
      name: new FormControl(),
      lastname: new FormControl('',Validators.required),
    });

    info: any;

  ngOnInit() {
     let id=this.activeRoute.snapshot.paramMap.get('infoId');
     if (id!=='add')
     {this.getToDo(+id);}
  }
  getToDo(id: number): void {
    this.eventsService.getById(id).subscribe(
      (info) => {
        console.log(info);
        this.info = info;
        this.InfoForm.patchValue(info);
      },
      );
    } 
  save(): void{
    const eventToSave =this.InfoForm.value;
    eventToSave.id = this.info ? this.info.id : 0;
    this.eventsService.saveEvents(this.InfoForm.value).subscribe(
      (response)=> {
        console.log('Saved Event');
      },
      (error)=> {
        console.log('Failed saving Event');
      },
    );
  }
  }

  

