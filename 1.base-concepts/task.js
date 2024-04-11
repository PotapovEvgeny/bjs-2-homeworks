"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2 - 4 * a * c);
	if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
		console.log(arr);
		return arr;
	}
	if (d === 0) {
		let root0 = -b / (2 * a);
		arr.push(root0);
		console.log(arr);
		return arr;
	} else {
		console.log("корней нет" + arr)
	}
	return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	percent = percent / 100 / 12;

	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
	let totalPayment = monthlyPayment * countMonths;

	totalPayment = Number(totalPayment.toFixed(2));

	return totalPayment;
}