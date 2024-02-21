// App.js

import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Post from './components/Post';
import MessageForm from './components/MessageForm/MessageForm';




export default function App() {

	// Adding Dummy Data to pass as props
	const postData = [
		{
			department: "Cotent",
			title: "The Evolution of Cinema Technology",
			author: "Mariam Safaoui",
			designation: "TCE",
			info: `xplore how cinema technology has evolved over the years, from silent films to modern 3D and IMAX experiences.`,
		},
		{
			department: "Cotent",
			title: "The Best Movie Soundtracks of All Time",
			author: "Batoul El Mansour",
			designation: "TCE",
			info: `Compile a list of the best movie soundtracks of all time, discussing how music enhances the movie-watching experience and highlighting some standout tracks.`,
		},
		{
			department: "Cotent",
			title: "The Rise of Streaming Services: Impact on Cinema",
			author: "Zeina Najem",
			designation: "TCE",
			info: `Discuss how the rise of streaming services like Netflix and Disney+ has affected the cinema industry, including changes in consumer behavior and the future of movie theaters.`,
		},
    {
			department: "Cotent",
			title: "The Impact of COVID-19 on the Cinema Industry",
			author: "Dana",
			designation: "TCE",
			info: `Explore how the COVID-19 pandemic has impacted the cinema industry, including theater closures, release date delays, and changes in movie-going behavior.`,
		},
    {
			department: "Cotent",
			title: "Interview with a Filmmaker",
			author: "Nour",
			designation: "TCE",
			info: `Conduct an interview with a filmmaker or director, discussing their latest project, creative process, and insights into the industry.`,
		},
    {
			department: "Cotent",
			title: "Tips for a Perfect Movie Night at Home",
			author: "Farah",
			designation: "TCE",
			info: `Provide readers with tips and ideas for creating the perfect movie night at home, including movie recommendations, snack ideas, and cozy setup suggestions.`,
		}
	]
	return (
		<div >
			<Navbar />
			<Banner />
      <MessageForm />
			<div className='grid grid-cols-3 gap-4 p-8'>
				{postData.map((e) => {
					return <Post content={e} />
				})}
			</div>

		</div>
	)
}
