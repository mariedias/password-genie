var s = document.getElementById('size');
var password = document.querySelector('div.textField');
var c = '';
var empty = true;

window.onload = updateChar;

function up() {
    var size = parseInt(s.value);
    if (size < 100) {
        s.value = size + 1;
    }
}

function down() {
    var size = parseInt(s.value);
    if (size > 0) {
        s.value = size - 1;
    }
}

function updateChar() {
    c = ''; // Reinicia a variável c
    if (document.getElementById('uppercase').checked) {
        c += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (document.getElementById('lowercase').checked) {
        c += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (document.getElementById('numbers').checked) {
        c += '0123456789';
    }
    if (document.getElementById('special').checked) {
        c += '!@#$%&*';
    }
}

function generate() {
    empty = false;
    let size = parseInt(s.value);
    if (size == 0) {
        password.innerHTML = `{ERROR} define a size greater than 0!`;
    } else if (c.length == 0) {
        password.innerHTML = `{ERROR} select at least one character option!`;
    } else {
        let res = '';
        for (let i = 0; i < size; i++) {
            const randomInd = Math.floor(Math.random() * c.length); 
            res += c.charAt(randomInd); 
        }
        password.innerHTML = `${res}`;
    }   
}

function copy() {
    var size = parseInt(s.value);
    if (!empty && c.length != 0 && size != 0) {
        navigator.clipboard.writeText(password.innerText);
        window.alert(`⊹₊⟡⋆ password copied to clipboard! ⊹₊⟡⋆`);
    } else {
        window.alert(`⊹₊⟡⋆ nothing to copy! generate a password first. ⊹₊⟡⋆`);
    }
}