import React from 'react';
import partner1 from '../images/hulu.png';
import partner2 from '../images/mx.png';
import partner3 from '../images/philips.png';
import partner4 from '../images/prime.png';
import partner5 from '../images/sony.png';
import partner6 from '../images/4dx.png';
import partner7 from '../images/dolby.png';
import partner8 from '../images/imax.png';
import '../App.css';

function Partners() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 text-center mb-8">Our Partners</h2>
        <p className="font-bold ml-6 text-2xl mb-4">Our strength lies in developing strategic partnerships.</p>
        <p className="text-gray-700 mb-8 ml-6 max-w-1000 leading-relaxed">
        Partnerships are key in this business, and City Movie has developed a core group of companies with which it works to provide our clients with the best solutions possible. Innovatively weaving together the complimentary attributes and services of diverse organizations, City Movie has developed important solutions for our clients to enhance the overall interpretive experience of a destination, stimulate visitor traffic, enhance visitor satisfaction, and improve profitability.        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 flex justify-center">
            <img src={partner1} alt="Partner 1" className="max-h-16 mx-auto" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 flex justify-center">
            <img src={partner2} alt="Partner 2" className="max-h-16 mx-auto" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 flex justify-center">
            <img src={partner3} alt="Partner 3" className="max-h-16 mx-auto" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 flex justify-center">
            <img src={partner4} alt="Partner 4" className="max-h-16 mx-auto" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 flex justify-center">
            <img src={partner5} alt="Partner 5" className="max-h-16 mx-auto" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 flex justify-center">
            <img src={partner6} alt="Partner 6" className="max-h-16 mx-auto" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 flex justify-center">
            <img src={partner7} alt="Partner 7" className="max-h-16 mx-auto" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 flex justify-center">
            <img src={partner8} alt="Partner 8" className="max-h-16 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
