export interface IBoard {
    state: State;
    data: ITicket[]
}

export interface ITicket {
    id: number;
    ticket: string;
    summary: string;
    description: string;
}

export enum State {
    ToDo = 'TO DO',
    InProgress = 'IN PROGRESS',
    InReview = 'IN REVIEW',
    Hold = 'HOLD',
    Done = 'DONE'
}