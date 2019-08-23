import React from 'react';
import { Card, CardContent, CardActions, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import JudgeModal from '../../components/Judges/JudgeModal';

const useStyles = makeStyles({
	card: {
		margin: 5,
		width: 300,
		display: 'flex',
		flexDirection: 'column'
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		flex: 1
	},
	avatar: {
		height: 100,
		width: 100
	},
	pitchJudge: {
		padding: 5,
		fontSize: 12,
		backgroundColor: '#CF96F8'
	},
	techJudge: {
		padding: 5,
		fontSize: 12,
		backgroundColor: '#96BCF8'
	}
});

const JudgeTypes = {
	TECH: 'Technical Judge',
	PITCH: 'Pitches/Ideation Judge'
};

function JudgesCard({
	firstName,
	lastName,
	image,
	title,
	company,
	type,
	children,
	socials
}) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<div
				className={
					type === JudgeTypes.PITCH ? classes.pitchJudge : classes.techJudge
				}
			>
				{type}
			</div>

			<CardContent className={classes.content}>
				<Avatar src={image} className={classes.avatar} />
				<h2 style={{ marginBottom: 0 }}>{`${firstName} ${lastName}`}</h2>
				<em>
					{title}, {company}
				</em>
			</CardContent>
			<CardActions>
				<JudgeModal
					firstName={firstName}
					lastName={lastName}
					title={title}
					company={company}
					imageUrl={image}
					socials={socials}
				>
					{children}
				</JudgeModal>
			</CardActions>
		</Card>
	);
}

function JudgesSection() {
	return (
		<>
			<h1>Judges</h1>
			<div
				style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
			>
				<JudgesCard
					type={JudgeTypes.PITCH}
					firstName="CJ"
					lastName="Ruggles"
					image="./images/judges/cj_profile_pic_2019.jpg"
					title="Strategic Enterprise Architect"
					company="ReeceTech, Reece Group"
					socials={['https://www.linkedin.com/in/cjruggles/']}
				>
					<p>
						C.J. specialises in strategy & architecture, helping organisations
						to use technology to drive business success. This means bring
						together an understanding of the industry, business model,
						processes, people and technology to create successful solutions. He
						has been involved in projects spanning logistics, finance, human
						resources, merchandising, customer relationship management,
						e-commerce, payments and more.
					</p>
					<p>
						C.J. completed a Bachelor of Information Systems and honours thesis
						at the University of Melbourne before starting his career in
						business analysis and quality assurance for a Melbourne-based
						consultancy. In 2011 he moved to the United Kingdom where he helped
						major logistics and retail organisations to build their architecture
						capability, develop strategy and execute digital transformations.
						C.J. joined Reece in 2016 and has been responsible for adoption of
						tier 1 software-as-a-service solutions, developing technology &
						cloud strategy, guiding integration & application design patterns
						and introduction of identity management & integration platforms.
						C.J. is also a member of the reecetech hackathon crew who organise
						their bi-annual internal hackathons!
					</p>
				</JudgesCard>
				<JudgesCard
					type={JudgeTypes.PITCH}
					firstName="Emma"
					lastName="Greco"
					image="./images/judges/emma_greco.jpg"
					title="Delivery Lead – Enterprise Customers"
					company="ReeceTech, Reece Group"
					socials={['https://www.linkedin.com/in/emma-greco-2021b112/']}
				>
					<p>
						Emma graduated from Monash University with a Bachelor of Information
						Systems, and went straight into a consulting career predominately in
						the energy and utilities industry. Of late, she has been in the
						retail sector, within the digital IT space. With nearly two decades
						of IT experience, Emma has worked on a number of high profile
						projects such as the introduction of smart meters, digital
						transformations and banking trading platforms. Her wide and varied
						project experience has afforded her industry knowledge and practices
						across the board.
					</p>
					<p>
						Besides her strong people management skills, Emma’s strengths are
						within the analysis of business requirements, drilling down and
						understanding what would deliver the best customer experience in a
						seamless manner. Her motto is to keep is simple and deliver quality!
						She’s currently employed as a Digital Delivery Lead for The Reece
						Group, focusing on integrations with enterprise customers.
					</p>
				</JudgesCard>
				<JudgesCard
					type={JudgeTypes.PITCH}
					firstName="Teresa"
					lastName="Finlayson"
					image="./images/judges/teresa.jpg"
					title="Interim CIO"
					company="Monash University"
					socials={[
						'https://twitter.com/FinalysonTeresa',
						'https://www.linkedin.com/in/teresafinlayson/'
					]}
				>
					<p>
						Teresa Finlayson is the Interim Chief Information Officer at Monash
						University, with oversight of a large division that delivers
						strategic projects across the institution, while embedding
						contemporary project and business change methodologies.
					</p>
					<p>
						She is an experienced change management practitioner with over 14
						years’ experience in advising, executing and managing the alignment
						of strategic goals to the culture and values of large, complex
						organisations.  She has been named as one of the finalists at the
						2019 Telstra Business Women’s Awards in Victoria for Public Sector
						and Academia.
					</p>
					<p>
						Teresa’s approach to change management is by ‘working differently
						and working together’.  She facilitates business transformation
						through practical application and coordinated action. Teresa
						empowers business leaders to translate objectives to action. After
						completing her undergraduate degree in Applied Computing, Teresa
						moved into change management with the global professional services
						consulting firm, KPMG before finding her home at Monash
						University.  As a key member of the CIO Portfolio, Teresa is
						responsible for driving significant strategic ICT reform agenda to
						deliver new ways of working across the University.
					</p>
				</JudgesCard>
				<JudgesCard
					type={JudgeTypes.TECH}
					firstName="PK"
					lastName="Heng"
					image="https://media.licdn.com/dms/image/C4D03AQF6NDVz9L89FQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=Uuam3rC-Y7gub0QC-MRioiGTGlz-W2ugSvNlqvsQPS0"
					title="Senior iOS Developer"
					company="Monash University"
					socials={['https://www.linkedin.com/in/poakongheng/']}
				>
					<p>
						PK has a decade of experience in the mobile space and has worked in
						a variety of industries including government, banking, mining,
						retail and consulting. Some of his highlights were working with
						Victoria Police to deliver their mobile strategy, working with BHP
						to roll out their digital concept of Standardised Work and
						delivering a mobile platform for PwC that assists multinational
						companies manage uncertainty in trade.
					</p>
					<p>
						PK has recently joined Monash University from PwC where he had
						managed a mobile delivery team out of The Experience Centre. He now
						leads a mobile capability team at eSolutions to define how they
						deliver mobile experiences.
					</p>
					<p>
						PK graduated from Monash University with a BA in Computer Science. A
						typical tech geek that loves learning new things and building cool
						stuff.
					</p>
				</JudgesCard>
				<JudgesCard
					type={JudgeTypes.TECH}
					firstName="Vatsalya"
					lastName="Goel"
					image="./images/judges/vatsalya_portrait.jpg"
					title="Senior Developer"
					company="Readify"
					socials={[
						'https://www.linkedin.com/in/vatsalyagoel/',
						'https://twitter.com/vatsalyagoel'
					]}
				>
					<p>
						Vatsalya is a technologist who engages people in interesting
						conversations around security. His love for security and experience
						as a developer allows him to try innovative ways of solving problems
						and enable his teams to deliver secure code without security being a
						process hindrance. He loves to tinker with new languages, explore
						new ways of designing software and dive into something new in the IT
						world.
					</p>
					<p>
						In his spare time you will find him contributing to random Open
						Source Software as a way to give back to the community.
					</p>
				</JudgesCard>
				<JudgesCard
					type={JudgeTypes.TECH}
					firstName="Ghina"
					lastName="Yashar"
					image="./images/judges/Ghina_Yashar.jpg"
					title="Graduate Software Engineer"
					company="REA Group"
					socials={['https://www.linkedin.com/in/ghina-yashar/']}
				>
					<p>
						Ghina’s a current Engineering Grad at REA Group who’s spent her last
						few months in the mobile space and with the Flatmates product. As a
						recent Monash and Wired Alumni, Ghina will be a familiar face to
						many participating at Bit by Bit. What to ask Ghina about? Anything
						about a career as a mobile dev. What not to ask Ghina about? How
						Ghina claims to have been the CFO of REA Group for a few days.
					</p>
				</JudgesCard>
			</div>
		</>
	);
}

export default JudgesSection;
