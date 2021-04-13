import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { IBoard, IEmployee, State } from '../_models/board';
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
    this.tickets.next(this.boardData)
  }

  getEmployees() {
    return employees;
  }

  addTicket() {

    let data = [{ id: 1, ticket: 'MP-000', employeeId: 9, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, excepturi?' }]

    let da: IBoard[] = [{ state: State.ToDo, data: data }]

    // this.tickets.next([...this.tickets.value, da])

  }
}
