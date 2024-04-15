'use strict'

// Задача №1;

function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;


	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
		if (max < arr[i]) {
			max = arr[i];
		}
		sum += arr[i];
	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}


// Задача №2;


function summElementsWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}

	let sum = arr.reduce((currentSum, currentNumber) => {
		return currentSum + currentNumber
	}, 0)
	return sum;
}


function differenceMaxMinWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}


//Задача №3;

function makeWork(arrOfArr, func) {
	let maxWorkResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let max = func(...arrOfArr[i]);
		if (maxWorkResult < max) {
			maxWorkResult = max;
		}
	}
	return maxWorkResult;
}

