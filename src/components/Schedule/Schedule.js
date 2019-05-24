import React from 'react';
import moment from 'moment-timezone';

import { DAY1, DAY2, DAY3 } from './data';

import './schedule.css';

const headingStyles = {
	SELECTED: {
		color: 'var(--secondary-color)',
		textDecoration: 'underline'
	},
	NOT_SELECTED: {
		color: '#aaa',
		textDecoration: 'underline'
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
						justifyContent: 'space-evenly'
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
					>
						Day 1
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
					>
						Day 2
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
					>
						Day 3
					</h2>
				</div>
				<div>
					{showday1 && (
						<div>
							{DAY1.events.map((event, index) => {
								return (
									<div key={index}>
										<div
											style={{
												borderLeft: 'solid white 1px'
											}}
										>
											<div
												style={{
													width: 20,
													height: 20,
													borderRadius: '100%',
													border: 'solid white 3px',
													marginLeft: -15,
													backgroundColor: 'var(--secondary-color)'
												}}
											/>
											<div style={{ marginLeft: 15 }}>
												<div>
													<h2>{event.title}</h2>
												</div>
												<div>{event.shortDescrip}</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
				{showday2 && 'Day 2 Schedule'}
				{showday3 && 'Day 3 Schedule'}
			</div>
		);
	}
}

export default Schedule;
