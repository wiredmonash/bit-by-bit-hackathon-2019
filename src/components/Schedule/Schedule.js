import React from 'react';
import moment from 'moment-timezone';

import { DAY1, DAY2, DAY3 } from './data';

import Event from './Event';

import './schedule.css';

const headingStyles = {
	SELECTED: {
		color: 'var(--secondary-color)',
		textDecoration: 'underline',
		cursor: 'pointer',
		marginLeft: 5,
		marginRight: 5
	},
	NOT_SELECTED: {
		color: '#aaa',
		textDecoration: 'underline',
		cursor: 'pointer',
		marginLeft: 5,
		marginRight: 5
	}
};
class Schedule extends React.Component {
	state = {
		today: null,
		showday1: true,
		showday2: false,
		showday3: false
	};

	componentDidMount() {
		const today = moment();
		if (moment(DAY1.date).isSame(today, 'd')) {
			this.setState({
				today,
				showday1: true,
				showday2: false,
				showday3: false
			});
		} else if (moment(DAY2.date).isSame(today, 'd')) {
			this.setState({
				today,
				showday1: false,
				showday2: true,
				showday3: false
			});
		} else if (moment(DAY3.date).isSame(today, 'd')) {
			this.setState({
				today,
				showday1: false,
				showday2: false,
				showday3: true
			});
		} else {
			this.setState({
				today,
				showday1: true,
				showday2: false,
				showday3: false
			});
		}
	}

	render() {
		const { showday1, showday2, showday3 } = this.state;
		return (
			<div style={{ width: '80%' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						flexWrap: 'wrap'
					}}
				>
					<h2
						style={
							showday1 ? headingStyles.SELECTED : headingStyles.NOT_SELECTED
						}
						onClick={() =>
							this.setState({
								showday2: false,
								showday3: false,
								showday1: true
							})
						}
						className="text-select-none"
					>
						Day 1 - Fri 23rd Aug
					</h2>
					<h2
						style={
							showday2 ? headingStyles.SELECTED : headingStyles.NOT_SELECTED
						}
						onClick={() =>
							this.setState({
								showday2: true,
								showday3: false,
								showday1: false
							})
						}
						className="text-select-none"
					>
						Day 2 - Sat 24th Aug
					</h2>
					<h2
						style={
							showday3 ? headingStyles.SELECTED : headingStyles.NOT_SELECTED
						}
						onClick={() =>
							this.setState({
								showday3: true,
								showday2: false,
								showday1: false
							})
						}
						className="text-select-none"
					>
						Day 3 - Sun 25th Aug
					</h2>
				</div>
				<div>
					{showday1 && (
						<div>
							{DAY1.events.map((event, index) => {
								return <Event event={event} key={index} />;
							})}
						</div>
					)}
				</div>
				{showday2 && (
					<div>
						{DAY2.events.map((event, index) => {
							return <Event event={event} key={index} />;
						})}
					</div>
				)}
				{showday3 && (
					<div>
						{DAY3.events.map((event, index) => {
							return <Event event={event} key={index} />;
						})}
					</div>
				)}
			</div>
		);
	}
}

export default Schedule;
