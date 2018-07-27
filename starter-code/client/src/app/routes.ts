import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import {SingleEntryComponent} from './single-entry/single-entry.component';
import {HttpModule} from '@angular/http'

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: EntryListComponent },
    {path: 'entry/:id', component: SingleEntryComponent}
  ]
