import React from 'react';
import DarkLogo from '../../img/logo-dark.png';
import WiredLogo from '../../img/wired-logo.png';

function Hero() {
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
					color: 'var(--primary-color)'
				}}
			>
				<div>
					<img src={WiredLogo} style={{ height: 20 }} /> presents...
				</div>
				<div>
					<h1 style={{ fontFamily: 'Courier', fontSize: 70, fontWeight: 500 }}>
						Bit by Bit Hack
					</h1>
				</div>
				<div style={{ fontSize: 70 }}>2019</div>
			</div>
		</div>
	);
}

export default Hero;
