//add text area script
const textarea = document.getElementById('message');

textarea.value = '';
textarea.value += '';

//header
const header = document.getElementById('header');

header.addEventListener('click', function handleClick() {
textarea.value += '###';
});

// code
const code = document.getElementById('code');

code.addEventListener('click', function handleClick() {
textarea.value += '``';
});

// quote
const quote = document.getElementById('quote');

quote.addEventListener('click', function handleClick() {
textarea.value += '>';
});

// link
const link = document.getElementById('link');

link.addEventListener('click', function handleClick() {
textarea.value += '[](url)';
});

// check
const check = document.getElementById('check');

check.addEventListener('click', function handleClick() {
textarea.value += '\n- [X] Item 1';
textarea.value += '\n- [   ] Item 2';
textarea.value += '\n- [   ] Item 3';
});

// list
const list = document.getElementById('list');

list.addEventListener('click', function handleClick() {
textarea.value += '\n- Item 1';
textarea.value += '\n- Item 2';
textarea.value += '\n- Item 3';
});

const modal_btn_close = document.getElementById('modal-btn-close');

modal_btn_close.addEventListener('click', function handleClick() {
    modal.close()
});

///connect database

function markdowntohtml() {
    fetch('http://localhost:5000/markdowntohtml',{
        method: 'POST',
        headers: {
            'message': textarea.value
        }})
    .then(response => response.json())
    .then(data => {
        console.log('data', data['message']);
        _data = data['message'];
        return data['message'];
    })
}

const modal_text = document.getElementById("modal-text")
const modal_btn = document.getElementById('modal-btn');
const modal = document.getElementById('modal');

modal_btn.addEventListener('click', function handleClick() {
    console.log('modal-btn', markdowntohtml())
    modal_text.textContent  = markdowntohtml();
    modal.showModal()
});