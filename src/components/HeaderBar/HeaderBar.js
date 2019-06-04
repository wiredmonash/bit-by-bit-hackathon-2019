import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../../img/bbb-single.svg';
import { withStyles, Button } from '@material-ui/core';

import MediaQuery from 'react-responsive';

import ScheduleIcon from '@material-ui/icons/Schedule';
import StarIcon from '@material-ui/icons/Star';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';

import links from '../../constants/links';

const styles = {
	root: { marginBottom: 100 },
	toolbar: {
		padding: 10
	},
	buttonIcon: {
		marginRight: 5
	}
};

class HeaderBar extends React.Component {
	render() {
		const {
			classes,
			handleScheduleClick,
			handlePrizes,
			handleJudges
		} = this.props;
		return (
			<div className={classes.root}>
				<AppBar color="secondary">
					<Toolbar className={classes.toolbar}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								flex: 1
							}}
						>
							<img src={Logo} alt="logo" style={{ height: 50 }} />
							<MediaQuery query="(min-device-width: 1224px)">
								<span
									style={{
										fontFamily: 'Courier',
										fontSize: 24,
										marginLeft: 10
									}}
									className="text-select-none"
								>
									Bit-by-Bit 2019
								</span>
							</MediaQuery>
						</div>
						<div>
							<MediaQuery minDeviceWidth={1224}>
								{matches => {
									return (
										<>
											<Button onClick={handleScheduleClick}>
												{matches && (
													<ScheduleIcon className={classes.buttonIcon} />
												)}
												Schedule
											</Button>
											<Button onClick={handlePrizes}>
												{matches && <StarIcon className={classes.buttonIcon} />}
												Prizes
											</Button>
											<Button onClick={handleJudges}>
												{matches && (
													<PeopleIcon className={classes.buttonIcon} />
												)}
												Judges
											</Button>
											<Button
												color="primary"
												variant="contained"
												href={links.EVENTBRITE_LINK}
												target="_blank"
												rel="noopener noreferrer"
											>
												{matches && (
													<EventIcon className={classes.buttonIcon} />
												)}
												Register
											</Button>
										</>
									);
								}}
							</MediaQuery>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(HeaderBar);
