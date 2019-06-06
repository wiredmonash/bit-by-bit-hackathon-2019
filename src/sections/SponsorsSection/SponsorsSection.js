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
						<Divider style={{ marginBottom: 5 }} />
						<div>
							<h2>Gold Club Sponsors</h2>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									flexWrap: 'wrap',
									justifyContent: 'space-evenly'
								}}
							>
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
										src="https://www.coles.com.au/~/media/images/colesa/mega-nav/logo-coles.png"
										style={{ height: 50 }}
										alt="Coles"
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
