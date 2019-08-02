import React from 'react';

import { withMobileDialog } from '@material-ui/core';
import JudgeModal from './JudgeModal';

function TeresaF({ imageUrl }) {
	return (
		<JudgeModal
			firstName="Teresa"
			lastName="Finlayson"
			title="Interim CIO"
			company="Monash University"
			imageUrl={imageUrl}
			socials={[
				'https://twitter.com/FinalysonTeresa',
				'https://www.linkedin.com/in/teresafinlayson/'
			]}
		>
			<p>
				Teresa Finlayson is the Interim Chief Information Officer at Monash
				University, with oversight of a large division that delivers strategic
				projects across the institution, while embedding contemporary project
				and business change methodologies.
			</p>
			<p>
				She is an experienced change management practitioner with over 14 years’
				experience in advising, executing and managing the alignment of
				strategic goals to the culture and values of large, complex
				organisations.  She has been named as one of the finalists at the 2019
				Telstra Business Women’s Awards in Victoria for Public Sector and
				Academia.
			</p>
			<p>
				Teresa’s approach to change management is by ‘working differently and
				working together’.  She facilitates business transformation through
				practical application and coordinated action. Teresa empowers business
				leaders to translate objectives to action. After completing her
				undergraduate degree in Applied Computing, Teresa moved into change
				management with the global professional services consulting firm, KPMG
				before finding her home at Monash University.  As a key member of the
				CIO Portfolio, Teresa is responsible for driving significant strategic
				ICT reform agenda to deliver new ways of working across the University.
			</p>
		</JudgeModal>
	);
}

export default withMobileDialog()(TeresaF);
