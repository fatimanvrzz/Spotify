import React from 'react';
import SongList from '../components/SongList';

const songs = [
  { id: '1', title: 'Jackpot', artist: 'Mr Lambo' },
  { id: '2', title: 'Sensiz', artist: 'Kenan' },
  { id: '3', title: 'All eyez on me', artist: 'Dj Belite' },
  { id: '4', title: 'Jackpot', artist: 'Mr Lambo' },
  { id: '5', title: 'Sensiz', artist: 'Kenan' },
  { id: '6', title: 'All eyez on me', artist: 'Dj Belite' },
  { id: '7', title: 'Jackpot', artist: 'Mr Lambo' },
  { id: '8', title: 'Sensiz', artist: 'Kenan' },
  { id: '9', title: 'All eyez on me', artist: 'Dj Belite' },
  { id: '10', title: 'Jackpot', artist: 'Mr Lambo' },
  { id: '11', title: 'Sensiz', artist: 'Kenan' },
  { id: '12', title: 'All eyez on me', artist: 'Dj Belite' },
];

const Home = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Songs</h2>
      <SongList songs={songs} />
    </div>
  );
};

export default Home;
