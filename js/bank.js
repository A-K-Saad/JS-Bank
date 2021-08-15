//Depositing money
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
});