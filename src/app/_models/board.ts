export interface IBoard {
    state: State;
    data: ITicket[]
}

export interface ITicket {
    id: number;
    ticket: string;
    summary: string;
    employeeId: number;
    description: string;
}

export interface IEmployee {
    id: number;
    name: string;
    surname: string;
    photo: string;
}

export enum State {
    ToDo = 'TO DO',
    InProgress = 'IN PROGRESS',
    InReview = 'IN REVIEW',
    Testing = 'TESTING',
    Hold = 'HOLD',
    Done = 'DONE'
}