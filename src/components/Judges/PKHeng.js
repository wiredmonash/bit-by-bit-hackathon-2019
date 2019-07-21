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
class PKHeng extends React.Component {
	state = {
		visible: false
	};
	render() {
		const { fullScreen, imageUrl, classes } = this.props;
		return (
			<>
				<Button
					onClick={() => this.setState({ visible: true })}
					color="primary"
				>
					Read more about PK...
				</Button>

				<Dialog
					fullScreen={fullScreen}
					onClose={() => this.setState({ visible: false })}
					open={this.state.visible}
					className={classes.modal}
				>
					<DialogTitle>Judge - PK Heng</DialogTitle>
					<DialogContent>
						<List>
							<ListItem>
								<ListItemAvatar className={classes.listItemAvatar}>
									<Avatar src={imageUrl} className={classes.avatar} />
								</ListItemAvatar>
								<ListItemText
									primary="PK Heng"
									secondary="Senior iOS Developer, Monash University"
								/>
							</ListItem>
						</List>

						<p>
							PK has a decade of experience in the mobile space and has worked
							in a variety of industries including government, banking, mining,
							retail and consulting. Some of his highlights were working with
							Victoria Police to deliver their mobile strategy, working with BHP
							to roll out their digital concept of Standardised Work and
							delivering a mobile platform for PwC that assists multinational
							companies manage uncertainty in trade.
						</p>
						<p>
							PK has recently joined Monash University from PwC where he had
							managed a mobile delivery team out of The Experience Centre. He
							now leads a mobile capability team at eSolutions to define how
							they deliver mobile experiences.
						</p>
						<p>
							PK graduated from Monash University with a BA in Computer Science.
							A typical tech geek that loves learning new things and building
							cool stuff.
						</p>
					</DialogContent>
					<DialogActions>
						<div style={{ flex: 1 }}>
							<SocialIcon
								url="https://www.linkedin.com/in/poakongheng/"
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

export default withMobileDialog()(withStyles(styles)(PKHeng));
