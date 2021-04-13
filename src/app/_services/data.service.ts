import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBoard, ITicket, State } from '../_models/board';
import { employees, toDo, inProgress, inReview, testing, hold, done } from '../_services/jsonData'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private boardData: IBoard[] = [
    { state: State.ToDo, data: toDo },
    { state: State.InProgress, data: inProgress },
    { state: State.InReview, data: inReview },
    { state: State.Testing, data: testing },
    { state: State.Hold, data: hold },
    { state: State.Done, data: done },
  ]

  private tickets = new BehaviorSubject<IBoard[]>([]);
  ticketsObs$ = this.tickets.asObservable();

  constructor() {
    const data = sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')) : this.boardData;
    this.tickets.next(data)
  }

  getEmployees() {
    return employees;
  }

  addTicket(data: ITicket, callback) {

    this.boardData.forEach(board => {
      if (board.state === State.ToDo) {
        board.data.push(data);
        callback(true);
      }
    })

    sessionStorage.setItem('data', JSON.stringify(this.boardData));

    this.tickets.next(this.boardData);
  }
}
