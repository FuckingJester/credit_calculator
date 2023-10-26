const creditAmount = document.getElementById('creditAmount');
const paymentPeriod = document.getElementById('paymentPeriod');

creditAmount.addEventListener('change', () => {
    calculateCredit()
    if (creditAmount.value < 1000) {
        alert('Значення не може бути менше 1000 перевірте дані)))')
        creditAmount.value = 1000;
    } else if (creditAmount.value > 50000) {
        alert('Значення не може бути більше 50000 перевірте дані)))')
        creditAmount.value = 50000;
    }
  });

paymentPeriod.addEventListener('change', () => {
    calculateCredit()
    if (paymentPeriod.value < 7) {
        alert('Значення не може бути менше 7 перевірте дані)))')
        paymentPeriod.value = 7;
    } else if (paymentPeriod.value > 60) {
        alert('Значення не може бути більше 60 перевірте дані)))')
        paymentPeriod.value = 60;
    }
  });

function calculateCredit() {
    let creditAmount = parseFloat(document.getElementById('creditAmount').value);
    let paymentPeriod = parseInt(document.getElementById('paymentPeriod').value);

    const interestRate = 2.2;

    const dailyPayment = (creditAmount + (creditAmount * (interestRate / 100) * paymentPeriod)) / paymentPeriod;
    const totalPayment = dailyPayment * paymentPeriod;

    document.getElementById('dailyPayment').innerText = `Денна сума погашення: ${dailyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').innerText = `Загальна сума погашення: ${totalPayment.toFixed(2)}`;
}