import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'; // Import FontAwesome icons

// Define your API key
const API_KEY = 'AIzaSyAtIXkVnICdaJ0eG3J04NRTNYO0Xnv_2XM';

const CinemaCard = ({ cinema }) => {
    const cardStyle = {
        width: '72%', 
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(167, 47, 151, 1)',
        padding: '16px',
        marginBottom: '45px',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto'
    };

    const imageStyle = {
        width: '700px', 
        height: '380px', 
        objectFit: 'cover',
        marginRight: '16px' 
    };

    return (
        <div style={cardStyle}>
            <img src={cinema.imageUrl} alt={cinema.name} style={imageStyle} />

            <div className="ml-4">
                <div className="mb-1">
                    <p className="text-xl font-bold text-purple-600 mb-3">{cinema.name}</p>
                    <FaPhone className="inline-block mr-2" />
                    <span>{cinema.contact}</span>
                </div>
                <div className="mb-1">
                    <FaMapMarkerAlt className="inline-block mr-2" />
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cinema.location)}`} className="text-gray-600" target="_blank" rel="noopener noreferrer">
                        {cinema.location}
                    </a>
                </div>
                <div className="mb-4">
                    <iframe
                        title={cinema.name}
                        width="90%"
                        height="230"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(cinema.location)}`}
                        allowFullScreen
                    ></iframe>
                </div>
                <a href={cinema.webUrl} className= "bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>Visit Website</a>
            </div>
        </div>
    );
};

export default CinemaCard;
