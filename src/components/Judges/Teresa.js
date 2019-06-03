import React from 'react';

import Modal from './Modal';

import ProfilePhoto from './img/teresa.png';

import { SocialIcon } from 'react-social-icons';
import { Button, withMobileDialog } from '@material-ui/core';

class TeresaF extends React.Component {
	state = {
		visible: false
	};
	render() {
		const { fullScreen } = this.props;
		return (
			<>
				<Button
					onClick={() => this.setState({ visible: true })}
					color="primary"
				>
					Read more about Teresa...
				</Button>
				<Modal
					fullScreen={fullScreen}
					handleModalClose={() => this.setState({ visible: false })}
					visible={this.state.visible}
				>
					<div style={{ display: 'flex', flexWrap: 'wrap' }}>
						<div style={{ flex: 1 }}>
							<img
								src={ProfilePhoto}
								style={{
									width: '30%',
									borderRadius: '100%',
									minWidth: 200,
									maxWidth: 300
								}}
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
								maxWidth: 300,
								width: 100
							}}
						>
							<h1 style={{ color: 'var(--primary-color)' }}>
								Teresa Finlayson
							</h1>
							<em>Deputy CIO, Monash University</em>
							<div>
								<SocialIcon
									url="https://twitter.com/FinalysonTeresa"
									style={{ margin: 5 }}
								/>
								<SocialIcon
									url="https://www.linkedin.com/in/teresafinlayson/"
									style={{ margin: 5 }}
								/>
							</div>
							<p>
								Teresa Finlayson is the Deputy Chief Information Officer at
								Monash University, with oversight of a large division that
								delivers strategic projects across the institution, while
								embedding contemporary project and business change
								methodologies.
							</p>
							<p>
								She is an experienced change management practitioner with over
								14 years’ experience in advising, executing and managing the
								alignment of strategic goals to the culture and values of large,
								complex organisations.  She has been named as one of the
								finalists at the 2019 Telstra Business Women’s Awards in
								Victoria for Public Sector and Academia.
							</p>
							<p>
								Teresa’s approach to change management is by ‘working
								differently and working together’.  She facilitates business
								transformation through practical application and coordinated
								action. Teresa empowers business leaders to translate objectives
								to action. After completing her undergraduate degree in Applied
								Computing, Teresa moved into change management with the global
								professional services consulting firm, KPMG before finding her
								home at Monash University.  As a key member of the CIO
								Portfolio, Teresa is responsible for driving significant
								strategic ICT reform agenda to deliver new ways of working
								across the University.
							</p>
						</div>
					</div>
				</Modal>
			</>
		);
	}
}

export default withMobileDialog()(TeresaF);
