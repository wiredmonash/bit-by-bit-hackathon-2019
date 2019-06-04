import React from 'react';
import { Divider } from '@material-ui/core';

import ReeceTechLogo from '../../img/sponsors/reecetech.svg';
import MonashUniLogo from '../../img/sponsors/monashlogo.png';
import { withStyles } from '@material-ui/styles';

const style = {
	sponsorContainer: { flex: 1, display: 'flex', flexDirection: 'column' }
};
function SponsorsSection({ classes }) {
	return (
		<>
			<div style={{ width: '80%', padding: 10 }}>
				<h1 style={{ color: 'var(--primary-color)' }}>Sponsors</h1>
				<div
					style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}
				>
					<div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'wrap'
							}}
						>
							<div className={classes.sponsorContainer}>
								<h2>Platinum Club Sponsor</h2>
								<div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
									<img
										src={ReeceTechLogo}
										style={{ width: 300 }}
										alt="ReeceTech"
									/>
								</div>
							</div>
							<div className={classes.sponsorContainer}>
								<h2>Venues & Logistics Sponsor</h2>
								<img
									src={MonashUniLogo}
									style={{ width: 300 }}
									alt="Monash University"
								/>
							</div>
						</div>
					</div>
				</div>
				<Divider style={{ marginBottom: 5 }} />
				<em>Other sponsors To be Announced</em>
			</div>
		</>
	);
}

export default withStyles(style)(SponsorsSection);
