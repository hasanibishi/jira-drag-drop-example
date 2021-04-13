import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/_models/board';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  employees = this.dataService.getEmployees();
  form: FormGroup;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      state: new FormControl(State.ToDo),
      name: new FormControl('', Validators.required),
      summary: new FormControl('', Validators.required),
      employeeId: new FormControl(null, Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  addTicket() {
    this.dataService.addTicket()
  }

  clear() {
    this.form.reset();
  }
}
//Math.floor(Math.random() * 10000)