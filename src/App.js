import React from 'react';
import Hero from './components/Hero/Hero';
import Schedule from './components/Schedule/Schedule';

import Button from './components/Hero/Button';
import JudgesSection from './sections/Judges';
import HeaderBar from './components/HeaderBar';
import PrizesSection from './sections/PrizesSection';
import SponsorsSection from './sections/SponsorsSection/SponsorsSection';
import {
	Table,
	TableHead,
	TableCell,
	TableRow,
	TableBody,
	Paper,
	withStyles,
	Divider
} from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.main
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default
		}
	}
}))(TableRow);

const styles = {
	divider: {
		marginTop: 10,
		backgroundColor: 'var(--secondary-color)'
	}
};

class App extends React.Component {
	constructor() {
		super();
		this.sponsors = React.createRef();
		this.schedule = React.createRef();
		this.judges = React.createRef();
		this.top = React.createRef();
		this.prizes = React.createRef();
		this.team = React.createRef();
	}

	scroll(ref) {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		const { classes } = this.props;
		return (
			<>
				<HeaderBar
					schedule={this.schedule}
					handleTop={() => this.scroll(this.top)}
					handleScheduleClick={() => this.scroll(this.schedule)}
					handlePrizes={() => this.scroll(this.prizes)}
					handleJudges={() => this.scroll(this.judges)}
					handleTeam={() => this.scroll(this.team)}
				/>
				<div
					style={{ display: 'flex', flexDirection: 'column' }}
					ref={this.top}
				>
					<div
						style={{
							minHeight: '100vh',
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<div
							style={{
								height: '90vh',
								flex: 0.5,
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex'
							}}
						>
							<Hero
								handleScheduleClick={() => this.scroll(this.schedule)}
								handlePrizes={() => this.scroll(this.prizes)}
								handleJudges={() => this.scroll(this.judges)}
								handleTeam={() => this.scroll(this.team)}
							/>
						</div>
						<hr />
						<div
							style={{
								backgroundColor: 'var(--secondary-color)',
								color: 'var(--primary-color)',
								padding: '10px 12px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								flex: 1
							}}
						>
							<h1 style={{ color: 'var(--primary-color)' }}>Live Stream</h1>
							<iframe
								width="640"
								height="360"
								src="https://www.youtube.com/embed/-rqfrH1Grzw"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
								title="Pitching Live Stream"
							/>
						</div>
						<div
							style={{
								backgroundColor: 'var(--primary-color)',
								color: 'white',
								padding: '10px 12px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								flex: 1
							}}
							id="intro"
							ref={this.introduction}
						>
							<div style={{ width: '80%', padding: 10 }}>
								<h1>Introduction</h1>
								<div
									style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}
								>
									<div style={{ flex: 1 }}>
										<p>
											Bit by Bit Hackathon is our hackathon for beginning
											hackers and is only available to Monash University
											students.
										</p>
										<p>Teams have to be between 4 to 6 people in size.</p>
										<p>
											Not sure what a hackthon is? Or perhaps Interested in
											being part of a hackathon but don't know where to start?
											Bit by Bit Hackathon is perfect for your first hackathon!
										</p>
										<p>
											Teams of students have the weekend to create a prototype
											of a website/app/game/whatever and get feedback from
											mentors before pitching them to our panel of judges. And
											workshops throughout the day!
										</p>
										<p>
											Coders, designers, thinkers - whatever your talent is,
											regardless of skill level, come and participate in Bit by
											Bit Hackathon!
										</p>
									</div>
									<div style={{ marginLeft: 10 }}>
										<img
											src="./images/pitches.jpg"
											style={{ width: 400, maxWidth: '80vw' }}
											alt="Unihack mini 2017"
										/>
									</div>
								</div>
								<hr />
								<div>
									<h1>Code of Conduct</h1>
									<p>
										This hackathon follows{' '}
										<a
											href="https://hackcodeofconduct.org/"
											style={{ color: 'var(--secondary-color' }}
										>
											The Hack of Conduct
										</a>
									</p>
								</div>
							</div>
						</div>
						<div
							style={{
								backgroundColor: 'var(--secondary-color)',
								color: 'var(--primary-color)',
								padding: '10px 12px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								flex: 1
							}}
							ref={this.prizes}
						>
							<PrizesSection />
						</div>
						<div
							style={{
								backgroundColor: 'var(--primary-color)',
								color: 'white',
								padding: '10px 12px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								flex: 1
							}}
							id="schedule"
							ref={this.schedule}
						>
							<div style={{ width: '80%', padding: 10 }}>
								<h1>Schedule</h1>
								<Schedule />
							</div>
						</div>
						<div
							style={{
								backgroundColor: 'var(--secondary-color)',
								color: 'var(--primary-color)',
								padding: '10px 12px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								flex: 1
							}}
							ref={this.team}
						>
							<div style={{ width: '80%', padding: 10 }}>
								<h1 style={{ color: 'var(--primary-color)' }}>Team</h1>
								<h2>MC</h2>
								<div style={{ display: 'flex', flexWrap: 'wrap' }}>
									<img
										src="./images/terence.jpg"
										style={{
											width: 100,
											borderRadius: '100%',
											marginRight: 10
										}}
										alt="Terence"
									/>
									<div>
										<h3>Terence Huynh</h3>
										<em>
											Terence Huynh is a Software Engineer and the founder of
											UNIHACK, Australia's largest student hackathon. He
											currently works at Localz, a Melbourne-based startup, as a
											full-stack engineer working across their portfolio of
											backend, frontend and mobile applications. He is also
											active in the tech community as a speaker and one of the
											organisers of Junior Developers Melbourne.
										</em>
									</div>
								</div>
								<h2>Event Leads</h2>
								<div className="flex-row">
									<div className="row">
										<h3>Eric Jiang</h3>
										<span>
											Graduate Rep <br />
										</span>
									</div>
									<div className="row">
										<h3>Ishan Joshi</h3>
										<span>
											<em>Education Officer</em> <br />
										</span>
									</div>
								</div>
							</div>
						</div>
						<div
							style={{
								backgroundColor: 'var(--primary-color)',
								color: 'var(--secondary-color)',
								padding: '10px 12px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								flex: 1
							}}
							ref={this.judges}
							id="judges"
						>
							<div style={{ width: '80%', padding: 10 }}>
								<JudgesSection />
								<hr />
								<h1>Judging</h1>
								<div>
									<p>
										This year, we've changed how our judging works. Judging for
										ideas will be broken into two parts:{' '}
										<strong>Technical</strong> and <strong>Pitches</strong>.{' '}
									</p>
									<p>
										Participants will firstly pitch/demonstrate their end
										product to our Technical Judges (with a time limit) and then
										do a final pitch to our pitching judges. This is so that
										both the technical and pitching the idea both weighted to
										give a final deliberation.
									</p>
									<Paper>
										<Table>
											<TableHead>
												<TableRow>
													<StyledTableCell>Section</StyledTableCell>
													<StyledTableCell>Time</StyledTableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												<StyledTableRow>
													<StyledTableCell>Technical Judging</StyledTableCell>
													<StyledTableCell>
														3 mins (Hard Deadline)
													</StyledTableCell>
												</StyledTableRow>
												<StyledTableRow>
													<StyledTableCell>Pitches Judging</StyledTableCell>
													<StyledTableCell>
														3 mins (hard deadline)
													</StyledTableCell>
												</StyledTableRow>
											</TableBody>
										</Table>
									</Paper>
								</div>
								<Divider variant="middle" className={classes.divider} />
								<div>
									<h2>Judging Criteria</h2>
									<em>To be announced</em>
								</div>
							</div>
						</div>

						<div
							style={{
								backgroundColor: 'var(--secondary-color)',
								color: 'var(--primary-color)',
								padding: '10px 12px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								flex: 1
							}}
							ref={this.sponsors}
							id="sponsors"
						>
							<SponsorsSection />
						</div>
					</div>
					<div
						style={{
							backgroundColor: 'var(--secondary-color)',
							color: 'var(--primary-color)',
							padding: '10px 12px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							flex: 1
						}}
					>
						<div style={{ width: '80%', padding: 10, textAlign: 'center' }}>
							<h1 style={{ color: 'var(--primary-color)' }}>
								Bit by Bit Hackathon 2019
							</h1>
							<div>
								Copyright &copy; Wired Monash 2019 - Site designed by{' '}
								<a href="https://github.com/lorderikir">lorderikir</a> - Made
								with ❤️ in Melbourne
							</div>
						</div>
					</div>
					<Button
						style={{
							width: 35,
							height: 35,
							bottom: 0,
							right: 0,
							position: 'sticky',
							backgroundColor: 'green',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
						onClick={() => this.scroll(this.top)}
					>
						<i
							className="fas fa-chevron-up"
							style={{ fontSize: 30, color: 'white' }}
						/>
					</Button>
				</div>
			</>
		);
	}
}

export default withStyles(styles)(App);
