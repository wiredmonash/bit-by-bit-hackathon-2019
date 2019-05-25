import React from 'react';
import Logo from '../../img/bit-by-bit-single.svg';

function Header() {
	return (
		<div
			style={{
				backgroundColor: 'var(--secondary-color)',
				color: 'var(--primary-color)',
				padding: 20
			}}
		>
			<div style={{ width: '100%' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center'
					}}
				>
					<img src={Logo} alt="logo" style={{ height: 50 }} />
					<span
						style={{ fontFamily: 'Courier', fontSize: 24, marginLeft: 10 }}
						className="text-select-none"
					>
						Bit-by-Bit 2019
					</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
