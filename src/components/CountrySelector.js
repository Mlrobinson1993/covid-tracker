import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Redirect } from 'react-router-dom';

export default function CountrySelector() {
	const { setCountry, data, country } = useContext(DataContext);
	const handleChange = e => {
		setCountry(e.target.value);
	};

	if (country) return <Redirect to='dashboard' />;

	return (
		<div className='country-selector'>
			<form>
				<select onChange={handleChange}>
					<option value='0'>Select your location</option>
					{data.map((country, key) => (
						<option key={country[0]} value={country[0]}>
							{country[0]}
						</option>
					))}
				</select>
			</form>
		</div>
	);
}
