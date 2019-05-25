import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Schedule from './components/Schedule/Schedule';

import Pitches from './img/pitches-min.jpg';

class App extends React.Component {
	constructor() {
		super();
		this.sponsors = React.createRef();
		this.schedule = React.createRef();
		this.judges = React.createRef();
	}

	scroll(ref) {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Header handleScheduleClick={() => this.scroll(this.schedule)} />
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
						<Hero handleScheduleClick={() => this.scroll(this.schedule)} />
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
										Bit by Bit Hackathon is our hackathon for first-time hackers
										and is only available to Monash University students.
									</p>
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
									<img src={Pitches} style={{ width: 400, maxWidth: '80vw' }} />
								</div>
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
						<div style={{ width: '80%', padding: 10 }}>
							<h1 style={{ color: 'var(--primary-color)' }}>Prizes</h1>
							<em>Prizes To be Announced</em>
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
						ref={this.judges}
						id="judges"
					>
						<div style={{ width: '80%', padding: 10 }}>
							<h1 style={{ color: 'var(--primary-color)' }}>Judges</h1>
							<em>Judges To be Announced</em>
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
						ref={this.sponsors}
						id="sponsors"
					>
						<div style={{ width: '80%', padding: 10 }}>
							<h1>Sponsors</h1>
							<em>Event Sponsors To be Announced</em>
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
					id="schedule"
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
			</div>
		);
	}
}

export default App;
