import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/_models/board';
import { DataService } from 'src/app/_services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  employees = this.dataService.getEmployees();
  form: FormGroup;

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(Math.floor(Math.random() * 10000)),
      state: new FormControl(State.ToDo),
      ticket: new FormControl(`MP-${Math.floor(Math.random() * 1000)}`),
      summary: new FormControl('', Validators.required),
      employeeId: new FormControl(null, Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  addTicket() {
    if (this.form.valid) {
      this.dataService.addTicket(this.form.value, (resp: boolean) => {
        if (resp)
          this.snackBar.open('Successfully inserted!', '', { duration: 2000 });
      });
    }
  }

  clear() {
    this.form.reset();
  }
}