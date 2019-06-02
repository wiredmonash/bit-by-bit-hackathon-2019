import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../../img/bbb-single.svg';
import { withStyles } from '@material-ui/core';

const styles = {
	root: { marginBottom: 100 },
	toolbar: {
		padding: 5
	}
};

class HeaderBar extends React.Component {
	render() {
		const { classes } = this.props;
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
							<span
								style={{ fontFamily: 'Courier', fontSize: 24, marginLeft: 10 }}
								className="text-select-none"
							>
								Bit-by-Bit 2019
							</span>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(HeaderBar);
