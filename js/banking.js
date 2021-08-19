
function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // Clear input
    depositInput.value = '';
    return depositAmount;
}

function updateTotalValue(amountId, Amount){
    const depositTotal = document.getElementById(amountId, Amount);
    const depositTotalAmountText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmountText);
    depositTotal.innerText = depositTotalAmount + Amount;
}

function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceAmountText = totalBalance.innerText;
    const totalAmountBalance = parseFloat(totalBalanceAmountText);

    return totalAmountBalance;
}

function updateBalance(depositAmount, isAdd){
    const totalBalance = document.getElementById('balance-total');
    /*
    const totalBalanceAmountText = totalBalance.innerText;
    const totalAmountBalance = parseFloat(totalBalanceAmountText); */
    const totalAmountBalance = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = totalAmountBalance + depositAmount;
    }
    else{
        totalBalance.innerText = totalAmountBalance - depositAmount;
    }
}

    // Deposit Button Handler

document.getElementById('deposit-btn').addEventListener('click', function(){

   const depositAmount = getInputValue('deposit-input');
   if(depositAmount > 0){
    updateTotalValue('deposit-total', depositAmount);
    updateBalance(depositAmount, true)
   }

});

    // Withdraw Button Handler

document.getElementById('withdraw-btn').addEventListener('click', function(){

   const withdrawAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotalValue('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('Error');
    }
    

})