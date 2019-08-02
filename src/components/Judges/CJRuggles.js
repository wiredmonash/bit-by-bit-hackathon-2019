import React from 'react';

import { withMobileDialog } from '@material-ui/core';
import JudgeModal from './JudgeModal';

function CJRugglesModal({ imageUrl }) {
	return (
		<JudgeModal
			firstName="C.J."
			lastName="Ruggles"
			title="Strategic Enterprise Architect"
			company="ReeceTech, Reece Group"
			imageUrl={imageUrl}
			socials={['https://www.linkedin.com/in/cjruggles/']}
		>
			<p>
				C.J. specialises in strategy & architecture, helping organisations to
				use technology to drive business success. This means bring together an
				understanding of the industry, business model, processes, people and
				technology to create successful solutions. He has been involved in
				projects spanning logistics, finance, human resources, merchandising,
				customer relationship management, e-commerce, payments and more.
			</p>
			<p>
				C.J. completed a Bachelor of Information Systems and honours thesis at
				the University of Melbourne before starting his career in business
				analysis and quality assurance for a Melbourne-based consultancy. In
				2011 he moved to the United Kingdom where he helped major logistics and
				retail organisations to build their architecture capability, develop
				strategy and execute digital transformations. C.J. joined Reece in 2016
				and has been responsible for adoption of tier 1 software-as-a-service
				solutions, developing technology & cloud strategy, guiding integration &
				application design patterns and introduction of identity management &
				integration platforms. C.J. is also a member of the reecetech hackathon
				crew who organise their bi-annual internal hackathons!
			</p>
		</JudgeModal>
	);
}

export default withMobileDialog()(CJRugglesModal);
