export const getData = callback => {
	fetch('https://pomber.github.io/covid19/timeseries.json')
		.then(res => res.json())
		.then(data => {
			callback(data);
		});
};
