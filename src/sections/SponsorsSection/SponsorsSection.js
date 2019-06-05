import React from 'react';
import { Divider } from '@material-ui/core';
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
									<a
										href="https://www.reecetech.com.au"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="./images/sponsors/reecetech.svg"
											style={{ width: 300 }}
											alt="ReeceTech"
										/>
									</a>
								</div>
							</div>
							<div className={classes.sponsorContainer}>
								<h2>Venues & Logistics Sponsor</h2>
								<a
									href="https://monash.edu"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./images/sponsors/monashlogo.png"
										style={{ width: 300 }}
										alt="Monash University"
									/>
								</a>
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
