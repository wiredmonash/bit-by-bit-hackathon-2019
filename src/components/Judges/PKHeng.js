import React from 'react';

import { withMobileDialog } from '@material-ui/core';
import JudgeModal from './JudgeModal';

class PKHeng extends React.Component {
	state = {
		visible: false
	};
	render() {
		const { imageUrl } = this.props;
		return (
			<JudgeModal
				firstName="PK"
				lastName="Heng"
				title="Senior iOS Developer"
				company="Monash University"
				imageUrl={imageUrl}
				socials={['https://www.linkedin.com/in/poakongheng/']}
			>
				<p>
					PK has a decade of experience in the mobile space and has worked in a
					variety of industries including government, banking, mining, retail
					and consulting. Some of his highlights were working with Victoria
					Police to deliver their mobile strategy, working with BHP to roll out
					their digital concept of Standardised Work and delivering a mobile
					platform for PwC that assists multinational companies manage
					uncertainty in trade.
				</p>
				<p>
					PK has recently joined Monash University from PwC where he had managed
					a mobile delivery team out of The Experience Centre. He now leads a
					mobile capability team at eSolutions to define how they deliver mobile
					experiences.
				</p>
				<p>
					PK graduated from Monash University with a BA in Computer Science. A
					typical tech geek that loves learning new things and building cool
					stuff.
				</p>
			</JudgeModal>
		);
	}
}

export default withMobileDialog()(PKHeng);
