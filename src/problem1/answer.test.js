const sum_to_n_a = require("./answer");
const sum_to_n_b = require("./answer");
const sum_to_n_c = require("./answer");

test("sum_to_n_a", () => {
	expect(sum_to_n_a(5)).toBe(15);
});

test("sum_to_n_b", () => {
	expect(sum_to_n_b(15)).toBe(120);
});

test("sum_to_n_c", () => {
	expect(sum_to_n_c(1000)).toBe(500500);
});
