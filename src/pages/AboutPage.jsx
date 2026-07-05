import HeroBanner from '../components/about/HeroBanner'
import OurStory from '../components/about/OurStory'
import HighlightsSection from '../components/about/HighlightsSection'
import MissionVision from '../components/about/MissionVision'
import LeadershipSection from '../components/about/LeadershipSection'
import WhyChooseFoodex from '../components/about/WhyChooseFoodex'
import JourneyTimeline from '../components/about/JourneyTimeline'
import AboutCTA from '../components/about/AboutCTA'

import '../styles/about-page.css'

function AboutPage() {
	return (
		<div className="about-page-shell">
			<HeroBanner />
			<OurStory />
			<HighlightsSection />
			<MissionVision />
			<LeadershipSection />
			<WhyChooseFoodex />
			<JourneyTimeline />
			<AboutCTA />
		</div>
	)
}

export default AboutPage