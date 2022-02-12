// deposit
let depositValue = document.getElementById('deposite-value');
let depositOutput = document.getElementById('deposite-output');

// withdraw
let withdrawValue = document.getElementById('withdrow-value');
let withdrawOutput = document.getElementById('Withdrow-output');

// balance
let balanceOutput = document.getElementById('balance-output');

function addMoney(currentAmmount, newAmmount) {
    const result = Number(currentAmmount) + Number(newAmmount);
    return result;
}
function getMoney(currentAmmount, newAmmount) {
    const result = Number(currentAmmount) - Number(newAmmount)
    return result;
}

function deposit() {
    // depositOutput.innerText = Number(depositOutput.innerText) + Number(depositValue.value);
    const totalDeposit = addMoney(depositOutput.innerText, depositValue.value)
    depositOutput.innerText = totalDeposit;

    // balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositValue.value);
    const totalBalance = addMoney(balanceOutput.innerText, depositValue.value);
    balanceOutput.innerText = totalBalance;

    //clean
    depositValue.value = '';
}

function withdraw() {
    // withdrawOutput.innerText = Number(withdrawOutput.innerText) + Number(withdrawValue.value);
    totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value)
    withdrawOutput.innerText = totalWithdraw;

    // balanceOutput.innerText = Number(balanceOutput.innerText) - Number(withdrawValue.value);

    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
    balanceOutput.innerText = totalBalance;
    //clean
    withdrawValue.value = '';
}
