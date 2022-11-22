import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name = new FormControl('');

  constructor() {}

  ngOnInit() {}

  updateName() {
    this.name.setValue('Nancy');
  }
  // Should allow updating
  // strings in a preset table or form structure
  // which in our case is the schedule
  // for masses shown on the home page
}
