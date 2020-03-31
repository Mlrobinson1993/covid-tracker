import React, { createContext, useState } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
	const [data, setData] = useState([]);
	const [country, setCountry] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<DataContext.Provider
			value={{ data, setData, country, setCountry, isLoaded, setIsLoaded }}
		>
			{children}
		</DataContext.Provider>
	);
}

export { DataProvider, DataContext };
