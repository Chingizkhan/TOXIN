$(document).ready(function() {
    $('.rooms-found__slider').slick({
        infinite: true,
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
    $('#slider-range').slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 5000, 10000 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + "₽"  + " - " + ui.values[ 1 ] + "₽" );
        }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "₽" +
        " - " + $( "#slider-range" ).slider( "values", 1 ) + "₽" );
});

let asideDopText = document.querySelector('.aside-dop__text');
let asideDopWrapper = document.querySelector('.aside-dop__wrapper');

asideDopText.onclick = function() {
    asideDopWrapper.classList.toggle('open')
}

/* DROPDOWN */
let dropdownRooms = document.querySelector('.dropdown-rooms');
let openDropdown = document.querySelector('.open-dropdown');

let dropdownButtonMinus1 = document.querySelector('.dropdown__button-minus-1');
let dropdownButtonPlus1 = document.querySelector('.dropdown__button-plus-1');
let dropdownText1 = document.querySelector('.dropdown__text-1');

let dropdownButtonMinus2 = document.querySelector('.dropdown__button-minus-2');
let dropdownButtonPlus2 = document.querySelector('.dropdown__button-plus-2');
let dropdownText2 = document.querySelector('.dropdown__text-2');

let dropdownButtonMinus3 = document.querySelector('.dropdown__button-minus-3');
let dropdownButtonPlus3 = document.querySelector('.dropdown__button-plus-3');
let dropdownText3 = document.querySelector('.dropdown__text-3');

openDropdown.onclick = function () {
    dropdownRooms.classList.toggle('open');
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
    openDropdown.textContent = '...';
}

/* APPLY */
let apply = document.querySelector('.dropdown-buttons__apply');
apply.onclick = function () {
    let result = +dropdownText1.value + +dropdownText2.value + +dropdownText3.value;
    openDropdown.textContent = 'Вы выбрали: ' + result;
    dropdownRooms.classList.remove('open');
}