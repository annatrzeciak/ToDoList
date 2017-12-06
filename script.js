const itemsToDo = [];
const itemsDone = [];
const addButton = $("#addButton");
const inputField = $("#inputField");
const form = $('.newTaskForm');

function addItem(e) {
    e.preventDefault();
    console.log(inputField);
    itemsToDo.push(inputField.val()); //pobieranie wartości w jQuery
    form.trigger('reset'); //czyszczenie formularza w jQuery
    showToDoItems();
}

function showToDoItems() {
    var html = "";
    $.each(itemsToDo,(index, value)=> {
        console.log(value);
        html += `<li class="list-group-item">${value}</li>`;
    });
    $('#listToDo').html(html);
}

addButton.click(addItem);
