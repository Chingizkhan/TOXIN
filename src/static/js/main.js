let dropdown = document.querySelector('.dropdown');
let guestsInput = document.querySelector('.guests-input');

let dropdownButtonMinus1 = document.querySelector('.dropdown__button-minus-1');
let dropdownButtonPlus1 = document.querySelector('.dropdown__button-plus-1');
let dropdownText1 = document.querySelector('.dropdown__text-1');

let dropdownButtonMinus2 = document.querySelector('.dropdown__button-minus-2');
let dropdownButtonPlus2 = document.querySelector('.dropdown__button-plus-2');
let dropdownText2 = document.querySelector('.dropdown__text-2');

let dropdownButtonMinus3 = document.querySelector('.dropdown__button-minus-3');
let dropdownButtonPlus3 = document.querySelector('.dropdown__button-plus-3');
let dropdownText3 = document.querySelector('.dropdown__text-3');

guestsInput.onclick = function () {
    dropdown.classList.toggle('open');
}
/* FIRST LINE */
dropdownButtonMinus1.onclick = function () {
    dropdownText1.value = dropdownText1.value - 1;
    if (dropdownText1.value <= 0) {
        dropdownText1.value = 0;
    }
};

dropdownButtonPlus1.onclick = function () {
    dropdownText1.value = parseInt(dropdownText1.value, 10) + parseInt(1, 10);
};
/* SECOND LINE */
dropdownButtonMinus2.onclick = function () {
    dropdownText2.value = dropdownText2.value - 1;
    if (dropdownText2.value <= 0) {
        dropdownText2.value = 0;
    }
};

dropdownButtonPlus2.onclick = function () {
    dropdownText2.value = parseInt(dropdownText2.value, 10) + parseInt(1, 10);
};

/* THIRD LINE */

dropdownButtonMinus3.onclick = function () {
    dropdownText3.value = dropdownText3.value - 1;
    if (dropdownText3.value <= 0) {
        dropdownText3.value = 0;
    }
};

dropdownButtonPlus3.onclick = function () {
    dropdownText3.value = parseInt(dropdownText3.value, 10) + parseInt(1, 10);
};

/* CLEAR */
let clear = document.querySelector('.dropdown-buttons__clear');

clear.onclick = function () {
    dropdownText1.value = 0;
    dropdownText2.value = 0;
    dropdownText3.value = 0;
    guestsInput.textContent = 'Сколько гостей';
}

/* APPLY */
let apply = document.querySelector('.dropdown-buttons__apply');
apply.onclick = function () {
    let result = +dropdownText1.value + +dropdownText2.value + +dropdownText3.value;
    guestsInput.textContent = 'Гостей: ' + result;
    dropdown.classList.remove('open');
}


/*
window.onclick = function (event) {
    if (!event.target.matches('.guests-input')) {
        let dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('open')) {
                openDropdown.classList.remove('open');
            }
        }
    }
}
*/

