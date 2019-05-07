import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventsService } from '../events.service';
import { IEvents } from '../ievents';
import { debounceTime} from 'rxjs/operators';
import { AuthService } from '../common/auth/auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.less']
})

export class EventListComponent implements OnInit {
  searchForm = new FormGroup({query: new FormControl('fir')});
  isAdmin = false;
  query: '';
  constructor(private eventsService: EventsService, private authService: AuthService) { }
  events:IEvents[];

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin.getValue();
    this.getEvents();
    this.searchForm.get('query').valueChanges.pipe(debounceTime(350)).subscribe((value)=>{ 
      console.log(value);
      this.query = value;
      this.getEvents();
    });
  }

  getEvents()
  {
    const value = this.searchForm.value.query;
     this.eventsService.get(value).subscribe((events)=>{
      console.log(events);
       this.events = events;
     });
  }
} 

