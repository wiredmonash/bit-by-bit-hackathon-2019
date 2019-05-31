import React from 'react';
import Modal from 'react-awesome-modal';
import Button from '../Hero/Button';

export default function JudgesModal({
	trigger,
	children,
	visible,
	handleModalClose
}) {
	return (
		<>
			<>{trigger}</>
			<Modal
				visible={visible}
				effect="fadeInUp"
				onClickAway={handleModalClose}
				style={{
					overflow: 'scroll'
				}}
			>
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'column',
						padding: 20,
						minWidth: 280,
						minHeight: 300,
						maxWidth: '80vw',
						overflow: 'scroll'
					}}
				>
					<div
						style={{ flex: 1, marginBottom: 10, color: 'var(--primary-color)' }}
					>
						{children}
					</div>
					<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
						<Button onClick={handleModalClose}>Close</Button>
					</div>
				</div>
			</Modal>
		</>
	);
}
