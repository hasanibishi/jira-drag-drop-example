import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IBoard, ITicket, State } from '../_models/board';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private toDo: ITicket[] = [{
    id: 1, ticket: 'MP-123', summary: 'Bug fixes', description: 'xxxx'
  }]

  private inProgress: ITicket[] = [
    { id: 1, ticket: 'MP-876', summary: 'Bug fixes', description: 'xxxx' },
    { id: 3, ticket: 'MP-131', summary: 'Bug fixes', description: 'xxxx' },
    { id: 4, ticket: 'MP-176', summary: 'Bug fixes', description: 'xxxx' },
    { id: 5, ticket: 'MP-234', summary: 'Bug fixes', description: 'xxxx' },
  ]

  private inReview: ITicket[] = [
    { id: 1, ticket: 'MP-876', summary: 'Bug fixes', description: 'xxxx' },
    { id: 3, ticket: 'MP-131', summary: 'Bug fixes', description: 'xxxx' },
    { id: 4, ticket: 'MP-176', summary: 'Bug fixes', description: 'xxxx' },
    { id: 5, ticket: 'MP-234', summary: 'Bug fixes', description: 'xxxx' },
  ]

  private hold: ITicket[] = [
    { id: 1, ticket: 'MP-876', summary: 'Bug fixes', description: 'xxxx' },
    { id: 3, ticket: 'MP-131', summary: 'Bug fixes', description: 'xxxx' },
    { id: 4, ticket: 'MP-176', summary: 'Bug fixes', description: 'xxxx' },
    { id: 5, ticket: 'MP-234', summary: 'Bug fixes', description: 'xxxx' },
  ]

  private done: ITicket[] = [
    { id: 1, ticket: 'MP-876', summary: 'Bug fixes', description: 'xxxx' },
    { id: 3, ticket: 'MP-131', summary: 'Bug fixes', description: 'xxxx' },
    { id: 4, ticket: 'MP-176', summary: 'Bug fixes', description: 'xxxx' },
    { id: 5, ticket: 'MP-234', summary: 'Bug fixes', description: 'xxxx' },
  ]

  private boardData: IBoard[] = [
    { state: State.ToDo, data: this.toDo },
    { state: State.InProgress, data: this.inProgress },
    { state: State.InReview, data: this.inReview },
    { state: State.Hold, data: this.hold },
    { state: State.Done, data: this.done },
  ]

  private tickets = new BehaviorSubject<IBoard[]>(this.boardData);
  ticketsObs = this.tickets.asObservable();

  constructor() { }
}
