import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './commons/form/form.component';
import { TableComponent } from './commons/table/table.component';
import { ListComponent } from './commons/list/list.component';
import { MassScheduleComponent } from './core/mass-schedule/mass-schedule.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FormComponent,
    TableComponent,
    ListComponent,
    MassScheduleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
