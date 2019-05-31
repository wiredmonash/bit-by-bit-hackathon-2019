import React from 'react';
import TeresaPhoto from '../../components/Judges/img/teresa.png';
import TeresaF from '../../components/Judges/Teresa';

function JudgesSection() {
	return (
		<>
			<h1>Judges</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				<div
					style={{
						flex: 1,
						marginBottom: 10,
						border: 'solid 0.2px var(--secondary-color)',
						maxWidth: '30%',
						padding: 10,
						minWidth: 300,
						wordWrap: 'break-word'
					}}
				>
					<div style={{ display: 'flex' }}>
						<div style={{ flex: 1 }}>
							<img
								src={TeresaPhoto}
								style={{ width: '100%', borderRadius: '100%' }}
								alt="Teresa Finlayson"
							/>
						</div>
						<div
							style={{
								flex: 2,
								display: 'flex',
								flexDirection: 'column',
								flexWrap: 'wrap',
								textOverflow: 'wrap',
								marginLeft: 20,
								maxWidth: '80%'
							}}
						>
							<h2>Teresa Finlayson</h2>
							<em>Deputy CIO, Monash University</em>
							<p>
								Teresa Finlayson is the Deputy Chief Information Officer at
								Monash University, with oversight of a large division that
								delivers strategic projects across the institution, while
								embedding contemporary project and business change
								methodologies.
							</p>
						</div>
					</div>
					<TeresaF />
				</div>
			</div>
			<em>More judges to be announced soon...</em>
		</>
	);
}

export default JudgesSection;
