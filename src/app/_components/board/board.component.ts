import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DataService } from 'src/app/_services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
import { IBoard } from 'src/app/_models/board';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  boardData$ = this.dataService.ticketsObs$;
  employees = this.dataService.getEmployees();

  ticketData: IBoard[] = [];

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.boardData$.subscribe(board => {
      this.ticketData = board.map(x => {
        return {
          ...x,
          data: x.data.map(item => {
            return {
              ...item,
              employee: this.employees.find(emp => emp.id === item.employeeId)
            }
          })
        }
      })
    })
  }

  createTicket() {
    this.dialog.open(CreateTicketComponent, {
      width: '400px',
      disableClose: true
    });
  }

  dropTicket(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    this.snackBar.open('Successfully changed!', '', { duration: 2000 });
  }
}
