import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BlogEntryComponent } from './blog-entry.component';
import { BlogFormComponent } from './blog-form.component';
import { BlogListComponent } from './blog-list.component';
import { TimepickerComponent } from './time-picker.component';
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogEntryComponent,
    BlogFormComponent,
    BlogListComponent,
    TimepickerComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
