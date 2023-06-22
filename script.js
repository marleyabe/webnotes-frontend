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