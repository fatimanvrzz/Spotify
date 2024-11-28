import React from 'react';
import { useSelector } from 'react-redux';
import SongList from '../components/SongList';

const songs = [
  { id: '1', title: 'Song One', artist: 'Artist A' },
  { id: '2', title: 'Song Two', artist: 'Artist B' },
  { id: '3', title: 'Song Three', artist: 'Artist C' },
];

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const favoriteSongs = songs.filter((song) => favorites.includes(song.id));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      <SongList songs={favoriteSongs} />
    </div>
  );
};

export default Favorites;
