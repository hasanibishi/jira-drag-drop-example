import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DataService } from 'src/app/_services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
import { IBoard, IEmployee, ITicket } from 'src/app/_models/board';

interface ITicketData extends ITicket {
  employee: IEmployee
}

interface IBoardData extends IBoard {
  data: ITicketData[]
}

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  boardData$ = this.dataService.ticketsObs$;
  employees = this.dataService.getEmployees();

  ticketData: IBoardData[] = [];

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
      width: '500px',
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

    sessionStorage.setItem('data', JSON.stringify(this.ticketData));

    this.snackBar.open('Successfully Updated!', '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
