import React from 'react';
import WiredLogo from '../../img/wired-logo.svg';

function Hero({ handleScheduleClick }) {
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				paddingLeft: 5,
				paddingRight: 5
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					color: 'var(--primary-color)',
					padding: '30px 20px'
				}}
			>
				<div>
					<img src={WiredLogo} style={{ height: 20 }} /> presents...
				</div>
				<div>
					<h1
						style={{
							fontFamily: 'Courier New',
							fontSize: 50,
							fontWeight: 700,
							color: 'var(--primary-color)'
						}}
					>
						Bit by Bit Hack
					</h1>
				</div>
				<div style={{ fontSize: 30 }}>2019</div>
				<div
					style={{
						fontSize: 20,
						marginTop: 10,
						marginBottom: 10,
						fontWeight: 700
					}}
				>
					Monash University Clayton Campus, <br />
					23rd August 2019 - 25th August 2019
				</div>
				<div>
					<a
						href="https://www.eventbrite.com.au/e/bit-by-bit-hackathon-2019-tickets-62388086446"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							backgroundColor: 'var(--primary-color)',
							color: 'var(--secondary-color)',
							padding: 10,
							fontWeight: 700,
							textDecoration: 'none',
							margin: 5
						}}
					>
						Register
					</a>
					<a
						onClick={handleScheduleClick}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							backgroundColor: 'var(--primary-color)',
							color: 'var(--secondary-color)',
							padding: 10,
							fontWeight: 700,
							textDecoration: 'none',
							cursor: 'pointer',
							margin: 5
						}}
					>
						View schedule
					</a>
				</div>
			</div>
		</div>
	);
}

export default Hero;
