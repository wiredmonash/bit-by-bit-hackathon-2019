import React from 'react';
import TeresaF from '../../components/Judges/Teresa';
import { Card, CardContent, CardActions, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PKHeng from '../../components/Judges/PKHeng';
import CJRuggles from '../../components/Judges/CJRuggles';
import EmmaGrecoModal from '../../components/Judges/EmmaGrecoModal';

const useStyles = makeStyles({
	card: {
		flex: 1,
		margin: 5,
		minWidth: 300
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

function JudgesCard({ name, image, title, company, type, more }) {
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
			<CardActions>{more}</CardActions>
		</Card>
	);
}

function JudgesSection() {
	return (
		<>
			<h1>Judges</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				<JudgesCard
					type={JudgeTypes.TECH}
					name="CJ Ruggles"
					image="./images/judges/cj_profile_pic_2019.jpg"
					title="Strategic Enterprise Architect"
					company="ReeceTech, Reece Group"
					more={
						<CJRuggles imageUrl={'./images/judges/cj_profile_pic_2019.jpg'} />
					}
				/>
				<JudgesCard
					type={JudgeTypes.PITCH}
					name="Emma Greco"
					image="./images/judges/emma_greco.jpg"
					title="Delivery Lead – Enterprise Customers"
					company="ReeceTech, Reece Group"
					more={<EmmaGrecoModal imageUrl={'./images/judges/emma_greco.jpg'} />}
				/>
				<JudgesCard
					type={JudgeTypes.PITCH}
					name="Teresa Finlayson"
					image="./images/judges/teresa.jpg"
					title="Interim CIO"
					company="Monash University"
					more={<TeresaF imageUrl={'./images/judges/teresa.jpg'} />}
				/>
				<JudgesCard
					type={JudgeTypes.TECH}
					name="PK Heng"
					image="https://media.licdn.com/dms/image/C4D03AQF6NDVz9L89FQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=Uuam3rC-Y7gub0QC-MRioiGTGlz-W2ugSvNlqvsQPS0"
					title="Senior iOS Developer"
					company="Monash University"
					more={
						<PKHeng imageUrl="https://media.licdn.com/dms/image/C4D03AQF6NDVz9L89FQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=Uuam3rC-Y7gub0QC-MRioiGTGlz-W2ugSvNlqvsQPS0" />
					}
				/>
			</div>
			<em>More judges to be announced soon...</em>
		</>
	);
}

export default JudgesSection;
