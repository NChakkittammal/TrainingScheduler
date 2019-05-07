import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvents } from './ievents';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  constructor(private http : HttpClient) { }

  getById(id: number): Observable<IEvents> {
    // make an http call
    return this.http.get<IEvents>('http://localhost:3000/events/${id}'); 
  }

  saveEvents(info: IEvents): Observable<IEvents> {
    if(info.id) {
      return this.http.put<IEvents>('http://localhost:3000/events',info);
    }
    return this.http.post<IEvents>('http://localhost:3000/events',info); 
  }

  get(text: string): Observable<IEvents[]> {
    return this.http.get<IEvents[]>('http://localhost:3000/events?name=${text}');
  }
}
