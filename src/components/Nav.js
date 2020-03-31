import React from 'react';

export default function Nav({ country, date }) {
	const handleClick = () => {
		window.location = '/';
	};

	return (
		<div className='header'>
			<button className='back' onClick={handleClick}>
				Back
			</button>
			<div className='header-text'>
				<h1>{country}</h1>
				<h2>{date}</h2>
			</div>
		</div>
	);
}
