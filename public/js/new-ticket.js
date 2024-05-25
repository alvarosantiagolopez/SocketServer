

const currentTicketLable = document.querySelector('span');
const createTicketButton = document.querySelector('button');

async function getLastTicket() {

    const lastTicket = await fetch('/api/ticket/last').then(resp => resp.json());
    currentTicketLable.innerText = lastTicket;
}

getLastTicket();

async function createTicket() {

    const newTicket = await fetch('/api/ticket/', {
        method: 'POST',
    }).then(resp => resp.json());

    currentTicketLable.innerText = newTicket.number;
}

createTicketButton.addEventListener('click', createTicket)

createTicket();
