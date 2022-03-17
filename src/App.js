import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Header } from './components/Header'
// import { Features } from "./components/features";
import { About } from './components/About'
// import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Resume } from "./components/Resume";
import { Contact } from './components/Contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import './App.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
})

const App = () => {
	const [landingPageData, setLandingPageData] = useState({})
	useEffect(() => {
		setLandingPageData(JsonData)
	}, [])

	return (
		<div>
			<Navigation />
			<Header data={landingPageData.Header} />
			{/* <Features data={landingPageData.Features} /> */}
			<About data={landingPageData.About} />
			<Projects data={landingPageData.Projects} />
			{/* <Skills data={landingPageData.Skills} /> */}
			{/* <Testimonials data={landingPageData.Testimonials} /> */}
			{/* <Team data={landingPageData.Team} /> */}
			<Contact data={landingPageData.Contact} />
			{/* <Resume data={landingPageData.Resume} /> */}
		</div>
	)
}

export default App
