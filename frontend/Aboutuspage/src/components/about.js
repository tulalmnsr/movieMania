import React from 'react';
import cinemaImage from '../images/cinema.jpg';
import '../App.css';

function About() {
  return (
    <div className="container ">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 px-4 mb-8 text-center">
          <img src={cinemaImage} alt="City Movie Cinema" className="rounded-lg shadow-lg mb-4 mt-5" />
        </div>
        <div className="w-full md:w-1/2 px-4 mt-5 "> {/* Added pr-6 class to adjust padding on the right */}
          <div className="h-2 w-16 bg-purple-400 shadow-lg mb-4 md:mb-0"></div> {/* Small bar with shadow */}
          <h1 className="text-3xl font-bold mb-8 text-purple-800">About Us</h1> {/* Purple text */}
          <p className="text-gray-800 mb-7 about">
            City Movie is your premier destination for entertainment in the heart of the city. 
            With state-of-the-art facilities and a commitment to delivering the best cinematic experience, 
            we strive to make every visit memorable.
          </p>
          <p className="text-gray-800 mb-7 about">
            Our cinema features the latest blockbusters across various genres, ensuring there's something 
            for everyone. Whether you're a solo moviegoer, on a date, or out with friends and family, 
            City Movie promises an unforgettable time.
          </p>
          <p className="text-gray-800 mb-7 about">
            We also offer special screenings, events, and promotions, so be sure to follow us on social 
            media and subscribe to our newsletter to stay updated on all the latest happenings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
