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

class JudgeModal extends React.Component {
	state = {
		visible: false
	};
	render() {
		const {
			fullScreen,
			classes,
			imageUrl,
			firstName,
			lastName,
			title,
			company,
			children,
			socials
		} = this.props;
		return (
			<>
				<Button
					onClick={() => this.setState({ visible: true })}
					color="primary"
				>
					{`Read more about ${firstName}...`}
				</Button>

				<Dialog
					fullScreen={fullScreen}
					onClose={() => this.setState({ visible: false })}
					open={this.state.visible}
					className={classes.modal}
				>
					<DialogTitle>{`Judge - ${firstName} ${lastName}`}</DialogTitle>
					<DialogContent>
						<List>
							<ListItem>
								<ListItemAvatar className={classes.listItemAvatar}>
									<Avatar src={imageUrl} className={classes.avatar} />
								</ListItemAvatar>
								<ListItemText
									primary={`${firstName} ${lastName}`}
									secondary={`${title} ${company}`}
								/>
							</ListItem>
						</List>

						{children}
					</DialogContent>
					<DialogActions>
						<div style={{ flex: 1 }}>
							{socials.map((social, key) => {
								return (
									<SocialIcon
										url={social}
										style={{ margin: 5, height: 30, width: 30 }}
										key={key}
									/>
								);
							})}
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

export default withMobileDialog()(withStyles(styles)(JudgeModal));
