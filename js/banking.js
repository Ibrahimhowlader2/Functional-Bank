document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    
    // Get deposit Total
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmountText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmountText);
    depositTotal.innerText = depositTotalAmount + depositAmount;

    // update your balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountText);
    balanceTotal.innerText = balanceTotalAmount + depositAmount;

    // Clear Deposit Input
    depositInput.value = '';
});

// Withdraw button Handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    
    // Withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmountText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

    // Balance Update
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountText);
    balanceTotal.innerText = balanceTotalAmount - withdrawAmount;

    // Clear Withdraw input
    withdrawInput.value = '';

})