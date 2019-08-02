import React from 'react';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	sponsorContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column'
	},
	sponsorRow: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	divider: {
		marginTop: 5,
		marginBottom: 5
	}
});
function SponsorsSection() {
	const classes = useStyles();
	return (
		<>
			<div style={{ width: '80%', padding: 10 }}>
				<h1 style={{ color: 'var(--primary-color)' }}>
					Special thanks to our Sponsors
				</h1>
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
								<h2>Bit by Bit Venues & Logistics Sponsor</h2>
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
						<Divider className={classes.divider} />
						<div>
							<h2>Gold Club Sponsors</h2>
							<div className={classes.sponsorRow}>
								<a
									href="https://www.rea-group.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./images/sponsors/rea.svg"
										style={{ height: 50 }}
										alt="REA Group"
									/>
								</a>
								<a
									href="https://www.imc.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://www.imc.com/images/logo.png"
										style={{ height: 50 }}
										alt="IMC"
									/>
								</a>
								<a
									href="https://www.carsales.com.au/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://resource.csnstatic.com/retail/globals/logo/v2/carsales.svg"
										style={{ height: 50 }}
										alt="Carsales"
									/>
								</a>
								<a
									href="https://www.colesgroup.com.au/home/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="./images/sponsors/coles.png"
										style={{ height: 50 }}
										alt="Coles"
									/>
								</a>
							</div>
						</div>
					</div>
					<Divider className={classes.divider} />
					<div>
						<h2>Event Sponsors</h2>
						<a
							href="https://github.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img
								src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
								style={{ height: 30 }}
								alt="github"
							/>{' '}
						</a>
					</div>
					<Divider className={classes.divider} />
					<div>
						<h2>Silver Club Sponsors</h2>
						<div className={classes.sponsorRow}>
							<a
								href="https://www.readygrad.com.au/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./images/sponsors/readygrad.svg"
									style={{ height: 30 }}
									alt="ReadyGrad"
								/>
							</a>
							<a
								href="https://www.janestreet.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./images/sponsors/janestreet.png"
									style={{ height: 30 }}
									alt="Jane Street"
								/>
							</a>
							<a
								href="https://www.atlassian.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./images/sponsors/atlassian.svg"
									style={{ height: 30 }}
									alt="Atlassian"
								/>
							</a>
							<a
								href="https://www.accenture.com/au-en"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./images/sponsors/accenture.png"
									style={{ height: 30 }}
									alt="Accenture"
								/>
							</a>
						</div>
					</div>
					<Divider className={classes.divider} />
					<div>
						<h2>Bronze Club Sponsors</h2>
						<div className={classes.sponsorRow}>
							<a
								href="https://www.facebook.com/pg/facebook/about/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./images/sponsors/facebook.png"
									style={{ height: 30 }}
									alt="Facebook"
								/>
							</a>
							<a
								href="https://www.bosch.com.au/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./images/sponsors/bosch.png"
									style={{ height: 30 }}
									alt="Bosch"
								/>
							</a>
							<a
								href="https://www.bcg.com/en-au/default.aspx"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="./images/sponsors/bcg.png"
									style={{ height: 30 }}
									alt="Boston Consulting Group"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SponsorsSection;
