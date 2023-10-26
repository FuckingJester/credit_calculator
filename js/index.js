const creditAmount = document.getElementById('creditAmount');
const paymentPeriod = document.getElementById('paymentPeriod');

creditAmount.addEventListener('change', () => {
    if (creditAmount.value < 1000) {
        creditAmount.value = 1000;
    } else if (creditAmount.value > 50000) {
        creditAmount.value = 50000;
    }
  });

paymentPeriod.addEventListener('change', () => {
    if (paymentPeriod.value < 7) {
        paymentPeriod.value = 7;
    } else if (paymentPeriod.value > 60) {
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