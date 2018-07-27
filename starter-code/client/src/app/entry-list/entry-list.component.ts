import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {JournalService} from '../services/journal.service'


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalService]
})
export class EntryListComponent implements OnInit {
  
  entries: Array<object>;

  constructor(
    private router: Router,
    private journalService: JournalService
  ) { }

  ngOnInit() {
    this.journalService.getAllEntries()
    .subscribe(entries=>{
      this.entries = entries;
    })
  }

}
