document.addEventListener('DOMContentLoaded', function() {
    addToBody();
    addTitle();
    addImage('./assets/img/boostrap.png');
    addParagraph();
    addFormColumn();
    addCardColumn();
    promoCode()
    endFooter();
})

function addToBody() {
    document.body.className = 'container bg-light';
}

function addImage(image) {
    let img = document.createElement('img');
    let divImg = document.createElement('div');
    
    img.src = image;
    img.width = 72;
    img.height = 72;
    
    divImg.className = 'w-100 mt-5 d-flex justify-content-center align-items-center';
    divImg.id = 'div-img';

    divImg.appendChild(img);
    // document.body.prepend(divImg);
    let title = document.getElementById('h2');
    document.body.insertBefore(divImg, title);
}

function addTitle() {
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
    paragraph.id = 'pg';
    paragraph.innerHTML = 'Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.';
    paragraph.appendChild(textParagraph);
    let title = document.getElementById('h2');
    title.insertAdjacentElement('afterend', paragraph);
}

function addFormColumn() {
    let divRow = document.createElement('div');
    divRow.className = 'row';
    divRow.id = 'divRow';
    let paragraph = document.getElementById('pg');
    paragraph.insertAdjacentElement('afterend', divRow);

    let divColOne = document.createElement('div');
    divColOne.className = "col-md-8 order-md-1";
    divColOne.id = 'columnOne'; 
    document.getElementById('divRow').appendChild(divColOne);

    let h4 = document.createElement('h4');
    h4.className = 'mb-3';
    h4.innerHTML = 'Billing address';
    document.getElementById('columnOne').appendChild(h4);
}

function addCardColumn() {
    let divCol = document.createElement('div');
    divCol.className = 'col-md-4 order-md-2 mb-4';
    divCol.id = 'divCol';
    let divRow = document.getElementById('divRow');
    divRow.appendChild(divCol);
    
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

    let ul = document.createElement('ul');
    ul.className = 'list-group mb-3';
    ul.id = 'ul';
    h4.appendChild(ul);
    h4.insertAdjacentElement('afterend', ul);

    // one
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between lh-condensed';
    ul.appendChild(li);

    let div = document.createElement('div');
    li.appendChild(div);

    let h1 = document.createElement('h6');
    h1.className = 'my-0';
    h1.innerHTML = 'Product name';
    div.appendChild(h1);

    let small = document.createElement('small');
    small.className = 'text-muted"';
    small.innerHTML = 'Brief description';
    div.appendChild(small);

    let span = document.createElement('span');
    span.className = 'text-muted';
    span.innerHTML = '$12';
    li.appendChild(span);

    // two
    let liTwo = document.createElement('li');
    liTwo.className = 'list-group-item d-flex justify-content-between lh-condensed';
    ul.appendChild(liTwo);

    let divTwo = document.createElement('div');
    liTwo.appendChild(divTwo);

    let h2 = document.createElement('h6');
    h2.className = 'my-0';
    h2.innerHTML = 'Second product';
    divTwo.appendChild(h2);

    let smallTwo = document.createElement('small');
    smallTwo.className = 'text-muted"';
    smallTwo.innerHTML = 'Brief description';
    divTwo.appendChild(smallTwo);

    let span2 = document.createElement('span');
    span2.className = 'text-muted';
    span2.innerHTML = '$8';
    liTwo.appendChild(span2);

    // Three
    let liThree = document.createElement('li');
    liThree.className = 'list-group-item d-flex justify-content-between lh-condensed';
    ul.appendChild(liThree);

    let span3 = document.createElement('span');
    span3.innerHTML = 'Total (USD)';
    liThree.appendChild(span3);

    let strong = document.createElement('strong');
    strong.innerHTML = '$20';
    liThree.appendChild(strong);
}

function promoCode() {
    let form = document.createElement('form');
    form.className = 'card p-2';
    ul.insertAdjacentElement('afterend', form);

    let div = document.createElement('div');
    div.className = 'input-group';
    form.appendChild(div);

    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Prome code';
    div.appendChild(input);

    let div2 = document.createElement('div');
    div2.className = 'input-group-append';
    div.appendChild(div2);

    let button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-secondary';
    button.innerHTML = 'Redeem';
    div2.appendChild(button);
}

function endFooter() {
    let footer = document.createElement('footer');
    footer.className = 'my-5 pt-5 text-muted text-center text-small';
    divRow.insertAdjacentElement('afterend', footer);

    let p = document.createElement('p');
    p.className = 'mb-1';
    p.innerHTML = '© 2017-2019 Company Name';
    footer.appendChild(p);

    let ul = document.createElement('u');
    ul.className = 'list-inline';
    footer.appendChild(ul);

    let li = document.createElement('li');
    li.className = 'list-inline-item';
    ul.appendChild(li);
    
    let a = document.createElement('a');
    a.href = '#';
    a.innerHTML = 'Privacy';
    li.appendChild(a);

    let lii = document.createElement('li');
    lii.className = 'list-inline-item';
    ul.appendChild(lii);

    let aa = document.createElement('a');
    aa.href = '#';
    aa.innerHTML = 'Terms';
    lii.appendChild(aa);

    let liii = document.createElement('li');
    liii.className = 'list-inline-item';
    ul.appendChild(liii);

    let aaa = document.createElement('a');
    aaa.href = '#';
    aaa.innerHTML = 'Support';
    liii.appendChild(aaa);
}