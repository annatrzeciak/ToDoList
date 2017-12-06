const itemsToDo = [];
const itemsDone = [];
const addButton = $("#addButton");
const inputField = $("#inputField");
const form = $('.newTaskForm');


function addItem(e) {
    const categoryName = $('.active').children().attr('data-value');
    const categoryColor = $('.active').children().attr('data-color');
    e.preventDefault();
    console.log(categoryName);
    console.log(categoryColor);

    var item = {
        text: inputField.val(), //pobieranie wartości w jQuery
        category: categoryName,
        color: categoryColor
    }
    itemsToDo.push(item);
    form.trigger('reset'); //czyszczenie formularza w jQuery
    showToDoItems();
}

function showToDoItems() {
    var html = "";
    $.each(itemsToDo, (index, item) => {
        console.log(item.text);
        html += `<li class="d-flex list-group-item align-items-center text-dark"><input type="checkbox" ><span class="mr-auto p-2">${item.text}</span><label class='p-2 badge badge-${item.color}'>${item.category}</label><button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></li>`;
    });
    $('#listToDo').html(html);
}

addButton.click(addItem);
