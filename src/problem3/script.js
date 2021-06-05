class DataSource {
	constructor(url) {
		this.url = url;
		this.prices = JSON.parse(localStorage.getItem("prices"));
	}
	// get Price List
	getPrices() {
		return fetch(this.url)
			.then((response) => response.json())
			.then((response) => {
				const data = response.data.prices;
				return data.map((price) => {
					let midrange = ((price.buy - price.sell) / 2 + price.sell) / 100;
					let quote = price.pair.slice(3);
					return (price = { mid: midrange.toFixed(2), quote: quote, ...price });
				});
			})
			.catch((err) => console.log(err));
	}
}
