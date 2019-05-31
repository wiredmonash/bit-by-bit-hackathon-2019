import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Schedule from './components/Schedule/Schedule';

import Pitches from './img/pitches-min.jpg';
import Button from './components/Hero/Button';
import JudgesSection from './sections/Judges';

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
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }} ref={this.top}>
				<Header
					handleTop={() => this.scroll(this.top)}
					handleScheduleClick={() => this.scroll(this.schedule)}
					handlePrizes={() => this.scroll(this.prizes)}
					handleJudges={() => this.scroll(this.judges)}
					handleTeam={() => this.scroll(this.team)}
				/>
				<div
					style={{
						minHeight: '100vh',
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<div
						style={{
							height: '50vh',
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
							<div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
								<div style={{ flex: 1 }}>
									<p>
										Bit by Bit Hackathon is our hackathon for beginning hackers
										and is only available to Monash University students.
									</p>
									<p>Teams have to be between 4 to 6 people in size.</p>
									<p>
										Not sure what a hackthon is? Or perhaps Interested in being
										part of a hackathon but don't know where to start? Bit by
										Bit Hackathon is perfect for your first hackathon!
									</p>
									<p>
										Teams of students have the weekend to create a prototype of
										a website/app/game/whatever and get feedback from mentors
										before pitching them to our panel of judges. And workshops
										throughout the day!
									</p>
									<p>
										Coders, designers, thinkers - whatever your talent is,
										regardless of skill level, come and participate in Bit by
										Bit Hackathon!
									</p>
								</div>
								<div style={{ marginLeft: 10 }}>
									<img
										src={Pitches}
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
						<div style={{ width: '80%', padding: 10 }}>
							<h1 style={{ color: 'var(--primary-color)' }}>Prizes</h1>
							<div style={{ display: 'flex', flexWrap: 'wrap' }}>
								<div style={{ flex: 1, minWidth: 300, wordWrap: 'wrap' }}>
									<h2>First-Timer Division</h2>
									<ol>
										<li>First Prize</li>
										<li>Second Prize</li>
										<li>Third Prize</li>
									</ol>
									<p>
										To qualify for this division, a team:
										<ul>
											<li>
												half of the team members must not have previous
												experience at a hackathon
											</li>
											<li>
												and more than two team members must not have won a hack
												within the past year
											</li>
										</ul>
									</p>
								</div>
								<div
									style={{
										borderLeft: 'solid 1px var(--primary-color)',
										marginLeft: 5,
										marginRight: 5
									}}
								/>
								<div
									style={{
										flex: 1,
										minWidth: 300
									}}
								>
									<h2>General Division</h2>
									<ol>
										<li>First Prize</li>
										<li>Second Prize</li>
										<li>Third Prize</li>
									</ol>
								</div>
								<div
									style={{
										borderLeft: 'solid 1px var(--primary-color)',
										marginLeft: 5,
										marginRight: 5
									}}
								/>
								<div
									style={{
										flex: 1,
										minWidth: 300
									}}
								>
									<h2>Other Division</h2>
									<ol>
										<li>Participants Choice</li>
									</ol>
								</div>
							</div>
						</div>
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
							<div>
								<em>MC to be announced</em>
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
									<h3>Event Lead #2</h3>
									<span>
										<em>Title</em> <br />
									</span>
								</div>
								<div className="row">
									<h3>Event Lead #2</h3>
									<span>
										<em>Title</em> <br />
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
							<h1>Judging Criteria</h1>
							<em>Judging Criteria To be Announced</em>
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
						<div style={{ width: '80%', padding: 10 }}>
							<h1 style={{ color: 'var(--primary-color)' }}>Sponsors</h1>
							<em>Sponsors To be Announced</em>
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
				>
					<div style={{ width: '80%', padding: 10, textAlign: 'center' }}>
						<h1 style={{ color: 'var(--primary-color)' }}>
							Bit by Bit Hackathon 2019
						</h1>
						<div>
							Copyright &copy; Wired Monash 2019 - Site designed by{' '}
							<a href="https://github.com/lorderikir">lorderikir</a> - Made with
							❤️ in Melbourne
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
						class="fas fa-chevron-up"
						style={{ fontSize: 30, color: 'white' }}
					/>
				</Button>
			</div>
		);
	}
}

export default App;
