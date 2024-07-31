import React from 'react';
import styles from './styles.module.scss';
import { Song } from '@/entities/song';
import { Track } from '@/features/audio-player/model/songSlice';

interface SongsList {
  data: Track[];
  handlePlay: (id: number, track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
}

export const SongsList: React.FC<SongsList> = ({data, handlePlay, currentTrack, isPlaying}) => {
  return (
    <div className={styles['songs-list']}>
        {data.map((item) => {
          const { id, artist, image, song, duration } = item;
          return (
            <Song 
              key={id}
              id={id}
              number={id} 
              artist={artist} 
              image={image} 
              song={song} 
              duration={duration}
              onClick={() => handlePlay(id, item)}
              isPlaying={currentTrack?.id === id && isPlaying}
            />
          );
      })}
    </div>
  )
}
