import React from 'react';
import TeresaF from '../../components/Judges/Teresa';
import { Card, CardContent, CardActions, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	card: {
		maxWidth: 300
	},
	avatar: {
		height: 100,
		width: 100
	}
});

function JudgesSection() {
	const classes = useStyles();
	return (
		<>
			<h1>Judges</h1>
			<Card className={classes.card}>
				<CardContent>
					<Avatar src="./images/judges/teresa.png" className={classes.avatar} />
					<h2 style={{ marginBottom: 0 }}>Teresa Finlayson</h2>
					<em>Deputy CIO, Monash University</em>
				</CardContent>
				<CardActions>
					<TeresaF />
				</CardActions>
			</Card>
			<em>More judges to be announced soon...</em>
		</>
	);
}

export default JudgesSection;
