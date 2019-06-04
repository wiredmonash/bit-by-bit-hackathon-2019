import React from 'react';

import { SocialIcon } from 'react-social-icons';
import {
	Button,
	withMobileDialog,
	Avatar,
	withStyles,
	Dialog,
	DialogContent,
	DialogActions,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	DialogTitle
} from '@material-ui/core';

const styles = {
	modal: {
		minWidth: 300
	},
	listItemAvatar: {
		marginRight: 5
	},
	avatar: {
		height: 60,
		width: 60
	}
};
class TeresaF extends React.Component {
	state = {
		visible: false
	};
	render() {
		const { fullScreen, classes } = this.props;
		return (
			<>
				<Button
					onClick={() => this.setState({ visible: true })}
					color="primary"
				>
					Read more about Teresa...
				</Button>

				<Dialog
					fullScreen={fullScreen}
					onClose={() => this.setState({ visible: false })}
					open={this.state.visible}
					className={classes.modal}
				>
					<DialogTitle>Judge - Teresa Finlayson</DialogTitle>
					<DialogContent>
						<List>
							<ListItem>
								<ListItemAvatar className={classes.listItemAvatar}>
									<Avatar
										src="./images/judges/teresa.png"
										className={classes.avatar}
									/>
								</ListItemAvatar>
								<ListItemText
									primary="Teresa Finlayson"
									secondary="Deputy CIO, Monash University"
								/>
							</ListItem>
						</List>

						<p>
							Teresa Finlayson is the Deputy Chief Information Officer at Monash
							University, with oversight of a large division that delivers
							strategic projects across the institution, while embedding
							contemporary project and business change methodologies.
						</p>
						<p>
							She is an experienced change management practitioner with over 14
							years’ experience in advising, executing and managing the
							alignment of strategic goals to the culture and values of large,
							complex organisations.  She has been named as one of the finalists
							at the 2019 Telstra Business Women’s Awards in Victoria for Public
							Sector and Academia.
						</p>
						<p>
							Teresa’s approach to change management is by ‘working differently
							and working together’.  She facilitates business transformation
							through practical application and coordinated action. Teresa
							empowers business leaders to translate objectives to action. After
							completing her undergraduate degree in Applied Computing, Teresa
							moved into change management with the global professional services
							consulting firm, KPMG before finding her home at Monash
							University.  As a key member of the CIO Portfolio, Teresa is
							responsible for driving significant strategic ICT reform agenda to
							deliver new ways of working across the University.
						</p>
					</DialogContent>
					<DialogActions>
						<div style={{ flex: 1 }}>
							<SocialIcon
								url="https://twitter.com/FinalysonTeresa"
								style={{ margin: 5, height: 30, width: 30 }}
							/>
							<SocialIcon
								url="https://www.linkedin.com/in/teresafinlayson/"
								style={{ margin: 5, height: 30, width: 30 }}
							/>
						</div>
						<Button onClick={() => this.setState({ visible: false })}>
							Ok
						</Button>
					</DialogActions>
				</Dialog>
			</>
		);
	}
}

export default withMobileDialog()(withStyles(styles)(TeresaF));
