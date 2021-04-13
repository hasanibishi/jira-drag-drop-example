import { IEmployee, ITicket } from "../_models/board";

export const employees: IEmployee[] = [
    { id: 1, name: 'John', surname: 'Smith', photo: 'https://i.pravatar.cc/150?img=7' },
    { id: 2, name: 'Paul', surname: 'William', photo: 'https://i.pravatar.cc/150?img=8' },
    { id: 3, name: 'Jack', surname: 'Reacher', photo: 'https://i.pravatar.cc/150?img=11' },
    { id: 4, name: 'Bon', surname: 'Chan', photo: 'https://i.pravatar.cc/150?img=12' },
    { id: 5, name: 'Jason', surname: 'Statham', photo: 'https://i.pravatar.cc/150?img=13' },
    { id: 6, name: 'Denzel', surname: 'Washington', photo: 'https://i.pravatar.cc/150?img=14' },
    { id: 7, name: 'Tom', surname: 'Hanks', photo: 'https://i.pravatar.cc/150?img=18' },
    { id: 8, name: 'Gary', surname: 'Oldman', photo: 'https://i.pravatar.cc/150?img=33' },
    { id: 9, name: 'Morgan', surname: 'Cruise', photo: 'https://i.pravatar.cc/150?img=51' }
]

export let toDo: ITicket[] = [
    { id: 1, ticket: 'MP-123', employeeId: 9, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, excepturi?' },
    { id: 2, ticket: 'MP-574', employeeId: 2, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, excepturi?' },
    { id: 3, ticket: 'MP-144', employeeId: 5, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, excepturi?' },
    { id: 4, ticket: 'MP-354', employeeId: 1, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, excepturi?' }
]

export const inProgress: ITicket[] = [
    { id: 1, ticket: 'MP-876', employeeId: 1, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolore aperiam corporis, necessitatibus vero obcaecati enim provident eius cumque quisquam!' },
    { id: 2, ticket: 'MP-131', employeeId: 2, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae!' },
    { id: 3, ticket: 'MP-176', employeeId: 3, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos accusamus neque.' },
    { id: 4, ticket: 'MP-234', employeeId: 4, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
]

export const inReview: ITicket[] = [
    { id: 1, ticket: 'MP-876', employeeId: 8, summary: 'Bug fixes', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ut incidunt eos, consectetur in omnis.' },
    { id: 2, ticket: 'MP-131', employeeId: 7, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.' },
    { id: 3, ticket: 'MP-176', employeeId: 6, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni temporibus at aliquid quas consequatur eligendi architecto.' },
    { id: 4, ticket: 'MP-234', employeeId: 5, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae!' },
]

export const testing: ITicket[] = [
    { id: 1, ticket: 'MP-667', employeeId: 4, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi officiis a magnam culpa et, sint dolore?' },
    { id: 2, ticket: 'MP-333', employeeId: 3, summary: 'Bug fixes', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ut incidunt eos, consectetur in omnis.' },
    { id: 3, ticket: 'MP-551', employeeId: 2, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni temporibus at aliquid quas consequatur eligendi architecto.' },
    { id: 4, ticket: 'MP-087', employeeId: 1, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.' },
]

export const hold: ITicket[] = [
    { id: 1, ticket: 'MP-876', employeeId: 9, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni temporibus at.' },
    { id: 3, ticket: 'MP-131', employeeId: 2, summary: 'Bug fixes', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, dolorem harum. Explicabo totam nostrum quae ad.' },
    { id: 4, ticket: 'MP-176', employeeId: 5, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
    { id: 5, ticket: 'MP-234', employeeId: 1, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.' },
]

export const done: ITicket[] = [
    { id: 1, ticket: 'MP-876', employeeId: 5, summary: 'Bug fixes', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ut incidunt eos, consectetur in omnis.' },
    { id: 2, ticket: 'MP-131', employeeId: 7, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni temporibus at aliquid quas consequatur eligendi architecto.' },
    { id: 3, ticket: 'MP-176', employeeId: 0, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
    { id: 4, ticket: 'MP-234', employeeId: 3, summary: 'Bug fixes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo voluptate quo harum facere natus facilis ex rem.' },
]