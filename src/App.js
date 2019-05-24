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
				>
					<div style={{ width: '80%' }}>
						<h1>Schedule</h1>
						<Schedule />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
