import React from 'react';

import MediaQuery from 'react-responsive';
import { withStyles } from '@material-ui/styles';

const style = {
	division: {
		flex: 1,
		minWidth: 300,
		padding: 10,
		maxWidth: '80vw',
		wordWrap: 'break-word'
	}
};
function VerticalBorder() {
	return (
		<div
			style={{
				borderLeft: 'solid 1px var(--primary-color)',
				marginLeft: 5,
				marginRight: 5
			}}
		/>
	);
}

function PrizesSection({ classes }) {
	return (
		<>
			<div style={{ width: '80%', padding: 10, maxWidth: '80vw' }}>
				<h1 style={{ color: 'var(--primary-color)' }}>Prizes</h1>
				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					<div className={classes.division}>
						<h2>First-Timer Division</h2>
						<ol>
							<li>First Prize</li>
							<li>Second Prize</li>
							<li>Third Prize</li>
						</ol>
						<div>
							To qualify for this division, a team:
							<ul>
								<li>
									half of the team members must not have previous experience at
									a hackathon
								</li>
								<li>
									and more than two team members must not have won a hack within
									the past year
								</li>
							</ul>
						</div>
					</div>
					<MediaQuery query="(min-device-width: 1224px)">
						<VerticalBorder />
					</MediaQuery>
					<div className={classes.division}>
						<h2>General Division</h2>
						<ol>
							<li>First Prize</li>
							<li>Second Prize</li>
							<li>Third Prize</li>
						</ol>
					</div>
					<MediaQuery query="(min-device-width: 1224px)">
						<VerticalBorder />
					</MediaQuery>
					<div className={classes.division}>
						<h2>Other Division</h2>
						<ol>
							<li>Participants Choice</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}

export default withStyles(style)(PrizesSection);
