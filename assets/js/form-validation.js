document.addEventListener('DOMContentLoaded', function() {
    document.body.className = 'container';
    title();
    addImage('./assets/img/boostrap.png');
    addParagraph('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.');
    addCardColumn();
})

function addImage(image) {
    let img = document.createElement('img');
    let divImg = document.createElement('div');
    
    img.src = image;
    img.width = 80;
    img.height = 80;
    
    divImg.className = 'w-100 mt-5 d-flex justify-content-center align-items-center';
    divImg.id = 'div-img';

    divImg.appendChild(img);
    // document.body.prepend(divImg);
    let title = document.getElementById('h2');
    document.body.insertBefore(divImg, title);
}

function title() {
    let h2 = document.createElement('h2');
    h2.className = 'py-3 text-center';
    h2.id = 'h2';
    h2.appendChild(document.createTextNode('Checkout form'));
    document.body.prepend(h2);
}

function addParagraph(text) {
    let paragraph = document.createElement('p');
    let textParagraph = document.createTextNode(text);
    paragraph.className = 'text-center mt-2';
    paragraph.id = 'pg'
    paragraph.appendChild(textParagraph);
    let title = document.getElementById('h2');
    title.insertAdjacentElement('afterend', paragraph);
}

function addCardColumn() {
    let divRow = document.createElement('div');
    divRow.className = 'row'
    divRow.id = 'divRow'
    let paragraph = document.getElementById('pg')
    paragraph.insertAdjacentElement('afterend', divRow);
    
    let divCol = document.createElement('div');
    divCol.className = 'col-md-4 order-md-2 mb-4';
    divCol.id = 'divCol'
    document.getElementById('divRow').appendChild(divCol);

    let h4 = document.createElement('h4')
    h4.className = 'd-flex justify-content-center align-items-center mb-3';
    document.getElementById('divCol').appendChild(h4);

    let spanOne = document.createElement("span");
    spanOne.className = 'text-muted'; 
    spanOne.innerHTML = 'Your cart &emsp;&emsp;';
    // spanOne.appendChild(document.createTextNode('Your cart'));
    h4.appendChild(spanOne);

    let spanTwo = document.createElement("span");
    spanTwo.className = 'badge badge-secondary badge-pill';
    spanTwo.innerHTML = '3';
    h4.appendChild(spanTwo);
}
