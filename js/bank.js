/* //Depositing money
document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;


    const depositTotal = document.getElementById("deposit-total");
    const previouDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previouDepositAmount) + parseFloat(newDepositAmount);

    //Updating account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);

    if (depositInput.value == "") {
        alert("Please fill in the field.")
    }
    else {
        depositTotal.innerText = newDepositTotal;
        balanceTotal.innerText = newBalanceTotal;
    }
    //Clearing the input field
    depositInput.value = "";
});
//Withdraw money
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;


    //Updating balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;


    if (withdrawInput.value == "") {
        alert("Please, fill in the field.");
    }
    else {
        withdrawTotal.innerText = newWithdrawTotal;
        balanceTotal.innerText = newBalanceTotal;
    }
    //Clearing the input field
    withdrawInput.value = "";
}); */


//Global Variables
const depositTotal = document.getElementById("deposit-total");
const depositInput = document.getElementById("deposit-input");
const depositBtn = document.getElementById("deposit-btn");

const withdrawTotal = document.getElementById("withdraw-total");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawBtn = document.getElementById("withdraw-btn");

const balanceTotal = document.getElementById("balance-total");

//Deposit and Withdraw Function
function updateTotal(totalFieldAmount, fieldInput) {
    const previousTotal = parseFloat(totalFieldAmount.innerText);
    const newTotal = previousTotal + parseFloat(fieldInput.value);
    if (fieldInput.value == "") {
        fieldInput.value = 0;
        alert("Please, fill in the field!");
    }
    else if (fieldInput.value < 1) {
        fieldInput.value = 0;
        alert("Please, enter a valid number!");
    }
    else {
        if (withdrawInput.value < parseFloat(balanceTotal.innerText)) {
            totalFieldAmount.innerText = newTotal;
        }
    }
    // return newTotal;
}
function updateBalance(totalFieldAmount, isAdding) {
    if (isAdding == true) {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(totalFieldAmount.value);
        depositInput.value = "";
    }
    else {
        if (withdrawInput.value < parseFloat(balanceTotal.innerText)) {
            balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(totalFieldAmount.value);
            withdrawInput.value = "";
        }
        else {
            alert("You can't withdraw more than the balance!");
            withdrawInput.value = "";
        }
    }
}

//Depositing
depositBtn.addEventListener("click", function () {
    updateTotal(depositTotal, depositInput);
    updateBalance(depositInput, true);
});
//Withdraw
withdrawBtn.addEventListener("click", function () {
    updateTotal(withdrawTotal, withdrawInput);
    updateBalance(withdrawInput, false);
});