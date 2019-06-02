import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '../Hero/Button';
import { DialogContent, DialogActions } from '@material-ui/core';

export default function JudgesModal({
	trigger,
	children,
	visible,
	handleModalClose
}) {
	return (
		<>
			<>{trigger}</>
			<Dialog
				open={visible}
				effect="fadeInUp"
				onClickAway={handleModalClose}
				style={{
					overflow: 'scroll'
				}}
			>
				<DialogContent>
					<div
						style={{ flex: 1, marginBottom: 10, color: 'var(--primary-color)' }}
					>
						{children}
					</div>
				</DialogContent>
				<DialogActions>
					<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
						<Button onClick={handleModalClose}>Close</Button>
					</div>
				</DialogActions>
			</Dialog>
		</>
	);
}
