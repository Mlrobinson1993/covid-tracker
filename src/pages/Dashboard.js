import React from 'react';
import Nav from '../components/Nav';
import {
	LineChart,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
	Line,
} from 'recharts';

export default function Dashboard({ country, data }) {
	console.log(data);
	const countryData = data.filter(data => {
		if (data[0] === country) {
			return data;
		}
	});

	const statistics = {
		deathArray: [],
		recoveredArray: [],
		confirmedArray: [],
		confirmedCases: countryData[0][1][countryData[0][1].length - 1].confirmed,
		date: countryData[0][1][countryData[0][1].length - 1].date,
		totalDeaths: countryData[0][1][countryData[0][1].length - 1].deaths,
		totalRecovered: countryData[0][1][countryData[0][1].length - 1].recovered,
	};

	countryData[0][1].filter(data => {
		statistics.deathArray.push({
			date: data.date
				.split('-')
				.slice(1, 3)
				.join('/'),
			deaths: data.deaths,
		});

		statistics.recoveredArray.push({
			date: data.date
				.split('-')
				.slice(1, 3)
				.join('/'),
			recovered: data.recovered,
		});

		statistics.confirmedArray.push({
			date: data.date
				.split('-')
				.slice(1, 3)
				.join('/'),
			cases: data.confirmed,
		});
	});

	return (
		<div className='dashboard'>
			<Nav country={country} date={statistics.date} />
			<div className='grid1'>
				<h2>
					Confirmed Cases: <span>{statistics.confirmedCases}</span>
				</h2>
				<h3 className='deaths'>
					Total Deaths: <span>{statistics.totalDeaths}</span>
				</h3>
				<h3 className='recovered'>
					Total Recovered: <span>{statistics.totalRecovered}</span>
				</h3>
			</div>
			<div className='grid2'>
				<h2>Cases: last 25 days</h2>
				<LineChart
					width={600}
					height={300}
					margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
					data={statistics.confirmedArray.slice(
						statistics.confirmedArray.length - 20
					)}
				>
					<XAxis
						dataKey='date'
						label={{ value: 'Date', offset: -30, position: 'insideLeft' }}
					/>
					<YAxis
						dataKey='cases'
						label={{
							value: 'Cases',
							angle: -90,
							position: 'insideLeft',
							offset: 20,
						}}
					/>
					<CartesianGrid strokeDasharray='3 3' />
					<Tooltip />

					<Line
						type='monotone'
						dataKey='date'
						stroke='#8884d8'
						activeDot={{ r: 8 }}
					/>
					<Line
						type='monotone'
						dataKey='cases'
						stroke='#4682b4'
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</div>
			<div className='grid3'>
				<h2>Recovered: last 25 days</h2>
				<LineChart
					width={600}
					height={300}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					data={statistics.recoveredArray.slice(
						statistics.recoveredArray.length - 20
					)}
				>
					<XAxis
						dataKey='date'
						label={{ value: 'Date', offset: -30, position: 'insideLeft' }}
					/>
					<YAxis
						dataKey='recovered'
						label={{
							value: 'Recoveries',
							angle: -90,
							position: 'insideLeft',
							offset: 20,
						}}
					/>
					<CartesianGrid strokeDasharray='3 3' />
					<Tooltip />

					<Line
						type='monotone'
						dataKey='date'
						stroke='#8884d8'
						activeDot={{ r: 8 }}
					/>
					<Line
						type='monotone'
						dataKey='recovered'
						stroke='#309b30'
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</div>

			<div className='grid4'>
				<h2>Deaths: last 25 days</h2>
				<LineChart
					width={600}
					height={300}
					margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
					data={statistics.deathArray.slice(statistics.deathArray.length - 20)}
				>
					<XAxis
						dataKey='date'
						label={{ value: 'Date', offset: -30, position: 'insideLeft' }}
					/>
					<YAxis
						dataKey='deaths'
						label={{
							value: 'Deaths',
							angle: -90,
							position: 'insideLeft',
							offset: 20,
						}}
					/>
					<CartesianGrid strokeDasharray='3 3' />
					<Tooltip />

					<Line
						type='monotone'
						dataKey='date'
						stroke='#8884d8'
						activeDot={{ r: 8 }}
					/>
					<Line
						type='monotone'
						dataKey='deaths'
						stroke='#b92121'
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</div>
		</div>
	);
}
