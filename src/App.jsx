import EventList from './components/EventList';
import React from 'react';
import './index.css';

function App() {
  return (  
    <div className="min-h-screen bg-black text-white">
      <header className="bg-[#CF0F47] py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Sydney Events</h1>
          <p className="mt-2">Discover the best events happening in Sydney</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <EventList />
      </main>
      
      <footer className="bg-[#000000] text-[#FFDEDE] py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Sydney Events. All events data scraped from public sources.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
