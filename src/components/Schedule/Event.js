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
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<h2 style={{ marginRight: 10 }}>{event.title}</h2>
						<span>{`${moment(event.startTime).format('hh:mm a')} ${
							event.endTime
								? `- ${moment(event.endTime).format('hh:mm a')}`
								: ''
						}`}</span>
					</div>
					<div>{event.shortDescrip}</div>
				</div>
			</div>
		</div>
	);
}

export default Event;
