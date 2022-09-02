cardNameInput = document.querySelector(".credit-name");
cardName = document.querySelector(".card-name");
cardNumberInput = document.querySelector(".credit-number");
cardNumber = document.querySelector(".card-number");
cardExpiryMonInput = document.querySelector('.expiry-month');
cardExpiryYeaInput = document.querySelector('.expiry-year');
cardMonth = document.querySelector('.card-month');
cardYear = document.querySelector('.card-year')
cardCvcInput = document.querySelector('.cvc-number');



cardNameInput.addEventListener('input', function () {
    cardName.innerText = cardNameInput.value;
});

cardNumberInput.addEventListener('input', function() {
    cardNumber.innerText = cardNumberInput.value;
})

cardExpiryMonInput.addEventListener('input', function() {
    cardMonth.innerHTML = cardExpiryMonInput.value;
})

cardExpiryYeaInput.addEventListener('input', function() {
    cardYear.innerHTML = cardExpiryYeaInput.value;
})


// changing border color after invalid submission 

const form = document.querySelector('.form');
const errorForDate = document.getElementById('error-for-date');

form.addEventListener('submit', checkNameForm);

function checkNameForm(event) {
    event.preventDefault();
    const nameValue = cardNameInput.value;
    const numberValue = cardNumberInput.value;
    const monthValue = cardExpiryMonInput.value;
    const yearValue = cardExpiryYeaInput.value;
    const cvcValue = cardCvcInput.value;

    if(nameValue === "") {
        cardNameInput.style.borderColor = "#e32c2b";
        document.getElementById("error-for-name").style.display = 'block';
    }

    if(numberValue === "") {
        cardNumberInput.style.borderColor = "#e32c2b";
        document.getElementById('error-for-number').style.display = 'block';
    }


    if(monthValue === "" && yearValue === "") {
        cardExpiryMonInput.style.borderColor = "#e32c2b";
        cardExpiryYeaInput.style.borderColor = "#e32c2b";
        errorForDate.style.display = 'block';
    } else if (monthValue === "") {
        cardExpiryMonInput.style.borderColor = "#e32c2b";
        errorForDate.innerHTML = "Enter a valid month";
    } else if (yearValue === "") {
        cardExpiryYeaInput.style.borderColor = "#e32c2b";
        errorForDate.innerHTML = "Enter a valid year";
    }

    if(cvcValue === "") {
        cardCvcInput.style.borderColor = "#e32c2b";
        document.getElementById("error-for-cvc").style.display = 'block';
    }
}


//restricting invalid characters and spliting card number into groups of 4//





//credit-card-number-validation//
    const amexReg = /^3[47][0-9]{13}$/;
    const discReg = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/;
    const jcbReg = /^(?:2131|1800|35\d{3})\d{11}$/;
    const masterReg = /^5[1-5][0-9]{14}$/;
    const visaReg = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const regEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const invalidCredit = document.getElementById('error-for-number');

cardNumberInput.addEventListener('input', validateCreditCardNumber);

function validateCreditCardNumber(event) {

    if(cardNumberInput.value.match(amexReg)) {
        cardNumberInput.style.background = "url('images/cc-amex-brands.svg') no-repeat scroll 98%";
        cardNumberInput.style.backgroundSize = "30px";
    } else if(cardNumberInput.value.match(discReg)) {
        cardNumberInput.style.background = "url('images/cc-discover-brands.svg') no-repeat scroll 98%";
        cardNumberInput.style.backgroundSize = "30px";
    } else if(cardNumberInput.value.match(jcbReg)) {
        cardNumberInput.style.background = "url('images/cc-jcb-brands.svg') no-repeat scroll 98%";
        cardNumberInput.style.backgroundSize = "30px";
    } else if(cardNumberInput.value.match(masterReg)) {
        cardNumberInput.style.background = "url('images/cc-mastercard-brands.svg') no-repeat scroll 98%";
        cardNumberInput.style.backgroundSize = "30px";
    } else if(cardNumberInput.value.match(visaReg)) {
        cardNumberInput.style.background = "url('images/cc-visa-brands.svg') no-repeat scroll 98%";
        cardNumberInput.style.backgroundSize = "30px";
    } 

}

// validate date and month //

cardExpiryMonInput.addEventListener('input', checkMonthExpiration);

function checkMonthExpiration(event) {

    if(cardExpiryMonInput.value.length < 2) {
        errorForDate.style.display = "block";
        errorForDate.innerHTML = "Must be in MM format";
    } else if(cardExpiryMonInput.value > 12) {
        errorForDate.innerHTML = "Enter a valid month";
    } else if(cardExpiryMonInput.value == '00') {
        errorForDate.innerHTML = "Enter a valid month";
    }
}


cardExpiryYeaInput.addEventListener('input', checkYearExpiration);

function checkYearExpiration(event) {

    if(cardExpiryYeaInput.value.length < 4) {
        errorForDate.style.display = "block";
        errorForDate.innerHTML = "Must be in YYYY format";
    } else if(cardExpiryYeaInput.value < 2022) {
        errorForDate.innerHTML = "Card Expired";
    } else if (cardExpiryYeaInput.value > 2050) {
        errorForDate.innerHTML = "Enter a valid year";
    } else {
        errorForDate.style.display = "none";
    }
}
