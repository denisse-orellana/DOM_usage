document.addEventListener('DOMContentLoaded', function() {
    document.body.className = 'container';
    title();
    addImage('./assets/img/boostrap.png');
    addParagraph('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.');
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
    var paragraph = document.createElement('p');
    var textParagraph = document.createTextNode(text);
    paragraph.className = 'text-center mt-2';
    paragraph.appendChild(textParagraph);
    let title = document.getElementById('h2');
    title.insertAdjacentElement('afterend', paragraph);
}

