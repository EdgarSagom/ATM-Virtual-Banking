const users = [
    {
        userOne: 'Edgar',
        emailOne: 'edgar@gmail.com',
        passwordOne: '12345',
        mainAccountOne: 150,
        savingsAccountOne: 100
    },
    {
        userTwo: 'Rocio',
        emailTwo: 'rocio@gmail.com',
        passwordTwo: '98765',
        mainAccountTwo: 300,
        savingsAccountTwo: 150
    },
    {
        userThree: 'Lizeth',
        emailThree: 'lizeth@gmail.com',
        passwordThree: '24680',
        mainAccountOneThree: 200,
        savingsAccountThree: 150
    }
];

// accountOne
let balanceMain = document.getElementById('balanceMain').value = users[0].mainAccountOne + ' USD';
let btn_transferSavings = document.getElementById('btn_transferSavings');
let btn_depositMain = document.getElementById('btn_depositMain');
let btn_withdrawMain = document.getElementById('btn_withdrawMain');

// accountTwo
let balanceSavings = document.getElementById('balanceSavings').value = users[0].savingsAccountOne + ' USD';
let btn_transferMain = document.getElementById('btn_transferMain');
let btn_depositSavings = document.getElementById('btn_depositSavings');
let btn_withdrawSavings = document.getElementById('btn_withdrawSavings');

function message(type) {
    let mistake = document.getElementById(`mistake${type}`);
    mistake.classList.add('show');
    setTimeout(() => {
        mistake.classList.remove('show');
    }, 3000);
};

// form: accountOne
// button transferSavings
function mainToSavings() {
    let balanceMain = parseInt(document.getElementById('balanceMain').value = users[0].mainAccountOne);
    let balanceSavings = parseInt(document.getElementById('balanceSavings').value = users[0].savingsAccountOne);
    let transferSavings = parseInt(document.getElementById('transferSavings').value);
    let total1 = balanceMain - transferSavings;
    let total2 = balanceSavings + transferSavings;
    if (total1 >= 10 && total2 <= 990) {
        document.getElementById('balanceMain').value = total1 + ' USD';
        document.getElementById('balanceSavings').value = total2 + ' USD';
    } else{
        message('10');
    }
};

btn_transferSavings.addEventListener('click', (evento) => {
    evento.preventDefault();
    mainToSavings();
});

// button depositMain
function depositToMain() {
    let balanceMain = parseInt(document.getElementById('balanceMain').value = users[0].mainAccountOne);
    let depositMain = parseInt(document.getElementById('depositMain').value);
    let total = balanceMain + depositMain;
    if (total <= 990) {
        document.getElementById('balanceMain').value = total + ' USD';
    } else{
        message('990');
    }
};

btn_depositMain.addEventListener('click', (evento) => {
    evento.preventDefault();
    depositToMain();
});

// button withdrawMain
function withdrawToMain() {
    let balanceMain = parseInt(document.getElementById('balanceMain').value = users[0].mainAccountOne);
    let withdrawMain = parseInt(document.getElementById('withdrawMain').value);
    let total = balanceMain - withdrawMain;
    if (total >= 10) {
        document.getElementById('balanceMain').value = total + ' USD';
    } else {
        message('10');
    }
};

btn_withdrawMain.addEventListener('click', (evento) => {
    evento.preventDefault();
    withdrawToMain();
});

// form accountTwo
// button transferMain
function SavingsToMain() {
    let balanceMain = parseInt(document.getElementById('balanceMain').value = users[0].mainAccountOne);
    let balanceSavings = parseInt(document.getElementById('balanceSavings').value = users[0].savingsAccountOne);
    let transferMain = parseInt(document.getElementById('transferMain').value);
    let total1 = balanceSavings - transferMain;
    let total2 = balanceMain + transferMain;
    if (total1 >= 10 && total2 <= 990) {
        document.getElementById('balanceSavings').value = total1+ ' USD';
        document.getElementById('balanceMain').value = total2 + ' USD';
    } else {
        message('10');
    }
};

btn_transferMain.addEventListener('click', (evento) => {
    evento.preventDefault();
    SavingsToMain();
});

// button depositSavings
function depositToSavings() {
    let balanceSavings = parseInt(document.getElementById('balanceSavings').value = users[0].savingsAccountOne);
    let depositSavings = parseInt(document.getElementById('depositSavings').value);
    let total = balanceSavings + depositSavings;
    if (total <= 990) {
        document.getElementById('balanceSavings').value = total + (' USD');
    } else {
        message('990');
    }
};

btn_depositSavings.addEventListener('click', (evento) => {
    evento.preventDefault();
    depositToSavings();
});

// button withdrawSavings
function withdrawToSavings() {
    let balanceSavings = parseInt(document.getElementById('balanceSavings').value = users[0].savingsAccountOne);
    let withdrawSavings = parseInt(document.getElementById('withdrawSavings').value);
    let total = balanceSavings - withdrawSavings;
    if (total >= 10) {
        document.getElementById('balanceSavings').value = total + (' USD');
    } else {
        message('10');
    }
};

btn_withdrawSavings.addEventListener('click', (evento) => {
    evento.preventDefault();
    withdrawToSavings();
});

// Popup para button signOff 
const signOff = document.getElementById('signOff');
const exitContainer = document.getElementById('exitContainer');
const goBack = document.getElementById('goBack');

signOff.addEventListener('click', () => {
    exitContainer.classList.add('show');
});

// buttons dentro del button signOff
goBack.addEventListener('click', () => {
    exitContainer.classList.remove('show');
});

exit.addEventListener('click', () => {
    window.location.href = 'index.html';
});