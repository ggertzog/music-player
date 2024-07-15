import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import ControlButton from '@/shared/ui/control-button';
import data from '@/widgets/songs-list/model/mock-data';
import OptionalInput from '@/shared/ui/optional-input';
import OptionalButton from '@/shared/ui/optional-button';
import volume from '@/shared/assets/icons/volume.svg';
import { LikeButton } from '@/features/like-button';
import { useTrack } from '../utils/audioContext';

export const AudioPlayer = () => {

  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const {currentTrack, setCurrentTrack} = useTrack();

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    if(currentTrack) {
      audioRef.current?.load();
      if(isPlaying) {
        audioRef.current?.play();
      }
    }
  }, [currentTrack, isPlaying])
  
  const play = () => {
    setIsPlaying(true);
    audioRef.current?.play();    
  }

  const pause = () => {
    setIsPlaying(false);
    audioRef.current?.pause();
  }

  const playNext = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentTrack(data[currentTrackIndex]);
  };

  const playPrev = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setCurrentTrack(data[currentTrackIndex]);
  };

  return (
    <>
      <div className={styles.decription}>
        <img className={styles.image} src={currentTrack?.image} alt={currentTrack?.artist} />
        <div className={styles.box}>
          <p className={styles.song}>{currentTrack?.song}</p>
          <h2 className={styles.artist}>{currentTrack?.artist}</h2>
        </div>
      </div>
      <div className={styles['audio-player']}>
        <audio ref={audioRef} src={currentTrack?.audioSrc} />
        <ControlButton theme = 'rewind' />
        <ControlButton theme = 'prev' onClick={playPrev} />
        <ControlButton theme = {isPlaying ? 'pause' : 'play'} onClick={isPlaying ? pause : play} />
        <ControlButton theme = 'next' onClick={playNext} />
        <ControlButton theme = 'forward' />
      </div>
      <OptionalInput type='l' />
      <div className={styles['volume-box']}>
        <img className={styles['volume-icon']} src={volume} alt="Громкость" />
        <OptionalInput type='s' />
      </div>
      <div className={styles['optional-container']}>
          <OptionalButton theme = 'shuffle' />
          <OptionalButton theme = 'replay' />
          <LikeButton />
          <OptionalButton theme = 'share' />
      </div>
    </>
  )
}
