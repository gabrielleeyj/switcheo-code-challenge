// n is integer
// loop through n to return sum.
// since MAX_SAFE_INTEGER is a const value of 9007199254740991

const sum_to_n_a = (n) => {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += i;
	}
	return sum;
};

const sum_to_n_b = (n) => {
	let sum = 0,
		i = 1;

	// looping from i = 1 to number
	while (i <= n) {
		sum += i;
		i++;
	}
};

const sum_to_n_c = (n) => {
	if (n > 0) {
		return n + sum_to_n_c(n - 1);
	} else {
		return n;
	}
};

module.exports = sum_to_n_a;
module.exports = sum_to_n_b;
module.exports = sum_to_n_c;
