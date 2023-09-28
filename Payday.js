function getNextPay(){
    const now = new Date();
    let payDay;

    if (now.getDate() <= 14){
        payDay = new Date(now.getFullYear(), now.getMonth(), 14);
    }
    else if (now.getDate() <= 29){
        payDay = new Date(now.getFullYear(), now.getMonth(), 29);
    }
    else{
        const nextMonth = now.getMonth() + 1;
        payDay = new Date(now.getFullYear(), nextMonth, 14);
    }

    while (payDay.getDay() === 0 || payDay.getDay() === 6){
        payDay.setDate(payDay.getDate() + 1);
    }

    return payDay;
}

function runningCountdown(){
    const NextPay = getNextPay();
    const now = new Date();

    const dateRemaining = NextPay - now;
    const daysRemaining = Math.ceil(dateRemaining / (1000 * 60 * 60 * 24));

    return {
        date: NextPay.toDateString(),
        daysRemaining: daysRemaining,
    };
}

const paydayInfo = runningCountdown();
console.log(`Next payday is on ${paydayInfo.date}`);
console.log(`Countdown of days until next payday: ${paydayInfo.daysRemaining}`);