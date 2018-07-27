import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {JournalService} from '../services/journal.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalService]
})
export class SingleEntryComponent implements OnInit {

  constructor(private route:Router,
    private journalService:JournalService,
    private activeRoute: ActivatedRoute
  ) { }

  id: any
  entry: any

  ngOnInit() {
  this.activeRoute.params
  .subscribe(params=>{
    this.id = params.id
  })

    this.journalService.getEntry(this.id)
    .subscribe(entry=>{
      this.entry = entry;
    })
  }

}
