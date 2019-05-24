import React from 'react';

import moment from 'moment-timezone';

const styles = {
	CURRENT: {
		color: 'var(--secondary-color)'
	},
	UPCOMING: {
		color: '#aaa'
	}
};

function Event({ event, key }) {
	const now = moment();
	const isNewer = moment(event.endTime).isBefore(now);
	console.log(isNewer);
	let eventStyle;

	if (isNewer) {
		eventStyle = { ...styles.CURRENT };
	} else {
		eventStyle = { ...styles.UPCOMING };
	}
	return (
		<div key={key}>
			<div
				style={{
					borderLeft: `solid ${isNewer ? 'var(--secondary-color)' : '#aaa'} 1px`
				}}
			>
				<div
					style={{
						width: 20,
						height: 20,
						borderRadius: '100%',
						marginLeft: -15,
						border: `solid ${isNewer ? 'var(--secondary-color)' : '#aaa'} 3px`,
						backgroundColor: `${isNewer ? 'var(--secondary-color)' : '#aaa'}`
					}}
				/>
				<div style={{ marginLeft: 15, ...eventStyle }}>
					<div>
						<h2>{event.title}</h2>
					</div>
					<span>{`${moment(event.startTime).format('hh:mm a')} - ${moment(
						event.endTime
					).format('hh:mm a')}`}</span>
					<div>{event.shortDescrip}</div>
				</div>
			</div>
		</div>
	);
}

export default Event;
