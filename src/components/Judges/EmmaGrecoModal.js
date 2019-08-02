import React from 'react';

import { withMobileDialog } from '@material-ui/core';
import JudgeModal from './JudgeModal';

function CJRugglesModal({ imageUrl }) {
	return (
		<JudgeModal
			firstName="Emma"
			lastName="Greco"
			title="Delivery Lead – Enterprise Customers"
			company="ReeceTech, Reece Group"
			imageUrl={imageUrl}
			socials={['https://www.linkedin.com/in/emma-greco-2021b112/']}
		>
			<p>
				Emma graduated from Monash University with a Bachelor of Information
				Systems, and went straight into a consulting career predominately in the
				energy and utilities industry. Of late, she has been in the retail
				sector, within the digital IT space. With nearly two decades of IT
				experience, Emma has worked on a number of high profile projects such as
				the introduction of smart meters, digital transformations and banking
				trading platforms. Her wide and varied project experience has afforded
				her industry knowledge and practices across the board.
			</p>
			<p>
				Besides her strong people management skills, Emma’s strengths are within
				the analysis of business requirements, drilling down and understanding
				what would deliver the best customer experience in a seamless manner.
				Her motto is to keep is simple and deliver quality! She’s currently
				employed as a Digital Delivery Lead for The Reece Group, focusing on
				integrations with enterprise customers.
			</p>
		</JudgeModal>
	);
}

export default withMobileDialog()(CJRugglesModal);
