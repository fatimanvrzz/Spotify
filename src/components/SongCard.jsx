import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favoritesSlice';

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.includes(song.id);

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold">{song.title}</h3>
      <p className="text-gray-400">{song.artist}</p>
      <button
        onClick={() => dispatch(toggleFavorite(song.id))}
        className={`mt-2 px-4 py-2 rounded ${
          isFavorite ? 'bg-red-500' : 'bg-gray-600'
        }`}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
    </div>
  );
};

export default SongCard;
