import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
import '../index.css';

const EventCard = ({ event }) => {
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleGetTickets = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email saved:', email);
      window.open('https://www.eventbrite.com/d/australia--sydney/events/', '_blank');
    }
  };

  return (
    <div className="bg-[#FFDEDE] text-black rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        
        <div className="flex items-center text-gray-700 mb-1">
          <FaCalendarAlt className="mr-2" />
          <span>{event.date}</span>
        </div>
        
        <div className="flex items-center text-gray-700 mb-3">
          <FaMapMarkerAlt className="mr-2" />
          <span>{event.location}</span>
        </div>
        
        <p className="text-gray-800 mb-4">{event.description}</p>
        
        {showEmailInput ? (
          <form onSubmit={handleGetTickets} className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border border-black rounded mb-2"
            />
            <button 
              type="submit"
              className="bg-[#CF0F47] text-white px-4 py-2 rounded hover:bg-[#FF0B55] flex items-center justify-center"
            >
              <FaTicketAlt className="mr-2" />
              Proceed to Tickets
            </button>
          </form>
        ) : (
          <button
            onClick={() => setShowEmailInput(true)}
            className="bg-[#CF0F47] text-white px-4 py-2 rounded hover:bg-[#FF0B55] w-full flex items-center justify-center"
          >
            <FaTicketAlt className="mr-2" />
            GET TICKETS
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
