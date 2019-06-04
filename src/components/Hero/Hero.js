import React from 'react';
import WiredLogo from '../../img/wired-logo.svg';
import Button from './Button';
import links from '../../constants/links';

function Hero({ handlePrizes, handleScheduleClick, handleJudges, handleTeam }) {
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
					<img src={WiredLogo} style={{ height: 20 }} alt="wired logo" />{' '}
					presents...
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
					Learning and Teaching Building, <br />
					19 Ancora Imparo Way, <br />
					Monash University Clayton Campus, <br />
					23rd August 2019 - 25th August 2019
				</div>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly'
					}}
				>
					<a
						href={links.EVENTBRITE_LINK}
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
					<Button onClick={handleScheduleClick}>View Schedule</Button>
					<Button onClick={handlePrizes}>View Prizes</Button>
					<Button onClick={handleJudges}>View Judges</Button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
