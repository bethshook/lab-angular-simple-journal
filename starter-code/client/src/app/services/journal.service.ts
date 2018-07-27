import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable(
  // {providedIn: 'root'}
)

export class JournalService {
  url = "http://localhost:3000/api/journal-entries/"

  constructor(private http:Http) { }

  //get all entries
  getAllEntries(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()));
}

  //get one entry
  getEntry(id){
    return this.http.get(this.url + id)
    .pipe(map((res: Response)=>res.json()))
  }
}
