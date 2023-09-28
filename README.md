# Payday.js

This JavaScript script calculates the date of the next payday and displays a running countdown in days until the next payday. Paydays are assumed to be on the 14th and 29th of each month, or the nearest weekday if they fall on a weekend or holiday.

## Usage

1. Make sure you have Node.js installed on your system.
2. Clone this repository or copy the provided JavaScript code into a file.
3. Open your terminal and navigate to the directory containing the script.
4. Run the script using the command:
node Payday.js
5. The script will display the next payday date and a countdown of days until the next payday. It will update the countdown every second.

## Script Explanation

- The `getNextPay()` function calculates the date of the next payday based on the current date, considering whether the current date is before the 14th or 29th and adjusting for weekends or holidays.
- The `runningCountdown()` function calculates the days remaining until the next payday and returns an object with the next payday date and the number of days remaining.
- The script then continuously updates and displays the countdown to the next payday in the console.

**Acknowledgements:**
- Special thanks to the following resources for their invaluable guides and documentation:
- [Node.js | Documentation](https://nodejs.org/en/docs)
- [JavaScript | MDN] (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Get Date Methods] (https://www.w3schools.com/js/js_date_methods.asp)

**This project has been created as a part of my internship application requirement.**
  
