const itemsToDo = JSON.parse(localStorage.getItem('itemsToDo')) || [];
const itemsDone = JSON.parse(localStorage.getItem('itemsDone')) || [];
const addButton = $("#addButton");
const inputField = $("#inputField");
const form = $('.newTaskForm');



function addItem(e) {
    const categoryName = $('.active').children().attr('data-value');
    const categoryColor = $('.active').children().attr('data-color');
    e.preventDefault();

    var item = {
        text: inputField.val(), //pobieranie wartości w jQuery
        category: categoryName,
        color: categoryColor
    }
    itemsToDo.push(item);
    localStorage.setItem('itemsToDo', JSON.stringify(itemsToDo));
    form.trigger('reset'); //czyszczenie formularza w jQuery
    showToDoItems();
}

function showToDoItems() {
    var html = $.map(itemsToDo, (item, index) => {
        return `<li class="d-flex list-group-item align-items-center text-dark"><input type="checkbox" onclick="taskDone(${index})" data-index=${index}><span class="mr-auto p-2">${item.text}</span><label class='p-2 badge badge-${item.color}'>${item.category}</label><button onclick="deleteItem(${index},itemsToDo)"type="button" class="close deleteItem" aria-label="Close"><span aria-hidden="true">&times;</span>
</button></li>`;
    }).join("");
    if (itemsToDo.length > 0) {
        $('#listToDo').html(html);
    } else {
        $('#listToDo').html("<p>Dodaj zadania do wykonania</p>");
    }
}

function showDoneItems() {
    var html = $.map(itemsDone, (item, index) => {
        return `<li class="d-flex list-group-item align-items-center text-dark"><input type="checkbox" onclick="taskNotDone(${index})" data-index=${index} checked><span class="mr-auto p-2">${item.text}</span><label class='p-2 badge badge-${item.color}'>${item.category}</label><button onclick="deleteItem(${index},itemsDone)"type="button" class="close deleteItem" aria-label="Close"><span aria-hidden="true">&times;</span>
</button></li>`;
    }).join("");
    if (itemsDone.length > 0) {
        $('#listDone').html(html);
    } else {
        $('#listDone').html("<p>Nie masz wykonanych zadań. Do dzieła :) </p>");
    }
}


function deleteItem(index, array) {

    array.splice(index, index+1);
    localStorage.setItem("itemsToDo", JSON.stringify(itemsToDo));
    localStorage.setItem("itemsDone", JSON.stringify(itemsDone));
    showToDoItems();
    showDoneItems();
}

function taskDone(index) {
  
    itemsDone.push(...itemsToDo.slice(index, index+1));
    deleteItem(index, itemsToDo);



}

function taskNotDone(index) {
  
    itemsToDo.push(...itemsDone.slice(index, index+1));
    deleteItem(index, itemsDone);

}

$(document).ready(showToDoItems);
$(document).ready(showDoneItems);
addButton.click(addItem);
