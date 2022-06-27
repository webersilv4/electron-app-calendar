const atualDate = new Date();
const lastDay = new Date(atualDate.getUTCFullYear(), atualDate.getUTCMonth() + 1, 0);

// 
const lastDaysLastMonth = new Date(atualDate.getFullYear(), atualDate.getMonth(), 1);
const lastDayLastMonth = new Date(atualDate.getUTCFullYear() -1, atualDate.getUTCMonth(), 0).getDate()

// 
const fisrtDayNextMonth = new Date(atualDate.getUTCFullYear(), atualDate.getUTCMonth() + 2, 0);
const firstDaysNextMonth = new Date(atualDate.getUTCFullYear(), atualDate.getUTCMonth(), 0);

const months = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
]

// 
document.getElementById('month').innerHTML = months[atualDate.getUTCMonth()];
document.getElementById('year').innerHTML = atualDate.getUTCFullYear();

// 
for (let index = lastDaysLastMonth.getDay(); index > 0; index--) {
    document.getElementById('days').innerHTML += `<li class="last-month bg-dark">${lastDayLastMonth - index}</li>`;
}

// 
for (let index = 1; index <= lastDay.getUTCDate(); index++) {
    
    if (atualDate.getUTCDate() === index)
        document.getElementById('days').innerHTML += `<li><span class="active">${index}</span></li>`;
    else
        document.getElementById('days').innerHTML += `<li>${index}<br /><a href="" type="button" data-toggle="modal" data-target="#exampleModal1">Add Event</a></li>`;
}

// 
for (let index = 1; index <= firstDaysNextMonth.getDay(); index++) {
    document.getElementById('days').innerHTML += `<li class="next-month bg-dark">${index}</li>`;
}
