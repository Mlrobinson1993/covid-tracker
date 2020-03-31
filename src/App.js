import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { getData } from './data/data';
import { useContext } from 'react';
import { DataContext } from './context/DataContext';
import CountrySelector from './components/CountrySelector';
import Dashboard from './pages/Dashboard';
import Spinner from './components/Spinner';

const App = () => {
	const { setIsLoaded, setData, isLoaded, country, data } = useContext(
		DataContext
	);

	useEffect(() => {
		return getData(data => {
			setData(Object.entries(data));
			setIsLoaded(true);
			console.log(Object.entries(data));
		});
	}, []);

	return (
		<div className='app'>
			{isLoaded ? <CountrySelector /> : <Spinner />}

			<Switch>
				<Route exact path='/' />
				{country && (
					<Route
						exact
						path='/dashboard'
						render={props => (
							<Dashboard {...props} country={country} data={data} />
						)}
					/>
				)}
			</Switch>
		</div>
	);
};

export default App;
