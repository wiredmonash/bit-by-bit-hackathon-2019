import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Schedule from './components/Schedule/Schedule';

function App() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Header />
			<div
				style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
			>
				<div
					style={{
						height: '50vh',
						flex: 0.5,
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex'
					}}
				>
					<Hero />
				</div>
				<div
					style={{
						backgroundColor: 'var(--primary-color)',
						color: 'white',
						padding: '10px 12px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						flex: 1
					}}
					id="schedule"
				>
					<div style={{ width: '80%', padding: 10 }}>
						<h1>Schedule</h1>
						<Schedule />
					</div>
				</div>
				<div
					style={{
						backgroundColor: 'var(--secondary-color)',
						color: 'var(--primary-color)',
						padding: '10px 12px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						flex: 1
					}}
					id="schedule"
				>
					<div style={{ width: '80%', padding: 10 }}>
						<h1 style={{ color: 'var(--primary-color)' }}>Judges</h1>
						<em>Judges To be Announced</em>
					</div>
				</div>
				<div
					style={{
						backgroundColor: 'var(--primary-color)',
						color: 'white',
						padding: '10px 12px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						flex: 1
					}}
					id="sponsor"
				>
					<div style={{ width: '80%', padding: 10 }}>
						<h1>Sponsors</h1>
					</div>
				</div>
			</div>
			<div
				style={{
					backgroundColor: 'var(--secondary-color)',
					color: 'var(--primary-color)',
					padding: '10px 12px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					flex: 1
				}}
				id="schedule"
			>
				<div style={{ width: '80%', padding: 10, textAlign: 'center' }}>
					<h1 style={{ color: 'var(--primary-color)' }}>
						Bit by Bit Hackathon 2019
					</h1>
					<div>
						Copyright &copy; Wired Monash 2019 - Site designed by{' '}
						<a href="https://github.com/lorderikir">lorderikir</a> - Made with
						❤️ in Melbourne
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
