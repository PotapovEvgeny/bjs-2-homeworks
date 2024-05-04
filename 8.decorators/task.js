//Задача № 1
function cachingDecoratorNew(func) {
	const cache = new Map();
	const maxSize = 5;

	return function() {
		const args = JSON.stringify(arguments);
		const hash = md5(args);

		if (cache.has(hash)) {
			console.log("Из кеша: " + cache.get(hash));
			return "Из кеша: " + cache.get(hash);
		}

		const result = func.apply(this, arguments);
		console.log("Вычисляем: " + result);

		cache.set(hash, result);

		if (cache.size > maxSize) {
			const oldestKey = cache.keys().next().value;
			cache.delete(oldestKey);
		}

		return "Вычисляем: " + result;
	};
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId;
	let isTrottled = false;

	function wrapper(...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(args);
			wrapper.count++;
		}, delay);
		if (!isTrottled) {
			func(...args);
			wrapper.count++;
			isTrottled = true;
		}
		wrapper.allCount++;
	}
	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
}