
const showPopupButton = document.getElementById('showPopupButton');
const amountInput = document.getElementById('amount');

showPopupButton.addEventListener('click', () => {
    const selectedAccount = document.querySelector('.select-field2 option:checked').textContent;
    const amount = parseFloat(amountInput.value);

    if (selectedAccount === 'Select Account to Debit') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select an account to debit!',
        });
    } else if (isNaN(amount) || amount <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Amount',
            text: 'Please enter a valid amount greater than zero.',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Withdrawal request submitted successfully!',
        });
    }
});