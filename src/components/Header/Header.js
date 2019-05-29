import React from 'react';
import Logo from '../../img/bit-by-bit-single.svg';
import './header.css';
import Button from '../Hero/Button';

class Header extends React.Component {
	state = {
		openMenu: false
	};
	render() {
		const { openMenu } = this.state;
		const {
			handlePrizes,
			handleScheduleClick,
			handleJudges,
			handleTop
		} = this.props;

		return (
			<nav
				style={{
					backgroundColor: 'var(--secondary-color)',
					color: 'var(--primary-color)',
					padding: 20,
					position: '-webkit-sticky' /* Safari */,
					position: 'sticky',
					top: 0,
					borderBottom: 'solid 0.2px var(--primary-color)'
				}}
			>
				<span
					onClick={() => this.setState({ openMenu: true })}
					className="navbar-toggle"
				>
					<i className="fas fa-bars" />
				</span>
				<div style={{ width: '100%', display: 'flex' }}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							flex: 1
						}}
						className={`${openMenu ? 'active' : ''}`}
					>
						<img src={Logo} alt="logo" style={{ height: 50 }} />
						<span
							style={{ fontFamily: 'Courier', fontSize: 24, marginLeft: 10 }}
							className="text-select-none"
						>
							Bit-by-Bit 2019
						</span>
					</div>
					<ul class={`main-nav ${openMenu ? 'active' : ''}`}>
						<li>
							<span onClick={handleTop} class="nav-links">
								Home
							</span>
						</li>
						<li>
							<span class="nav-links" onClick={handleScheduleClick}>
								Schedule
							</span>
						</li>
						<li>
							<span class="nav-links" onClick={handlePrizes}>
								Prizes
							</span>
						</li>
						<li>
							<span class="nav-links" onClick={handleJudges}>
								Judges
							</span>
						</li>
						<li>
							<span class="nav-links">
								<Button href="https://www.eventbrite.com.au/e/bit-by-bit-hackathon-2019-tickets-62415133344">
									Buy Tickets
								</Button>
							</span>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
