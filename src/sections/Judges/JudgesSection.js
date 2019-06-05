import React from 'react';
import TeresaF from '../../components/Judges/Teresa';
import { Card, CardContent, CardActions, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	card: {
		maxWidth: 300
	},
	content: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
	avatar: {
		height: 100,
		width: 100
	},
	pitchJudge: {
		padding: 5,
		fontSize: 12,
		backgroundColor: '#CF96F8'
	},
	techJudge: {
		padding: 5,
		fontSize: 12,
		backgroundColor: '#96BCF8'
	}
});

const JudgeTypes = {
	TECH: 'Technical Judge',
	PITCH: 'Pitches/Ideation Judge'
};

function JudgesCard({ name, image, title, company, type }) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<div
				className={
					type === JudgeTypes.PITCH ? classes.pitchJudge : classes.techJudge
				}
			>
				{type}
			</div>

			<CardContent className={classes.content}>
				<Avatar src={image} className={classes.avatar} />
				<h2 style={{ marginBottom: 0 }}>{name}</h2>
				<em>
					{title}, {company}
				</em>
			</CardContent>
			<CardActions>
				<TeresaF />
			</CardActions>
		</Card>
	);
}

function JudgesSection() {
	return (
		<>
			<h1>Judges</h1>
			<JudgesCard
				type={JudgeTypes.PITCH}
				name="Teresa Finlayson"
				image="./images/judges/teresa.png"
				title="Deputy CIO"
				company="Monash University"
			/>
			<em>More judges to be announced soon...</em>
		</>
	);
}

export default JudgesSection;
