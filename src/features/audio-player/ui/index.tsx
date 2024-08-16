import React from 'react';
import styles from './styles.module.scss';
import ControlButton from '@/shared/ui/control-button';
import data from '@/widgets/songs-widget/model/mock-data';
import OptionalInput from '@/shared/ui/optional-input';
import OptionalButton from '@/shared/ui/optional-button';
import volumeIcon from '@/shared/assets/icons/volume.svg';
import { LikeButton } from '@/features/like-button';
import { useVolumeControl } from '../utils/useVolumeControl';
import { useTimelineControl } from '../utils/useTimelineControl';
import { useTrackControl } from '../utils/useTrackControl';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import useAddToFavorite from '@/features/add-to-favorite';

interface AudioPlayerParams {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const AudioPlayer: React.FC<AudioPlayerParams> = ({audioRef}) => {

  const currentTrack = useSelector((state: RootState) => state.song.currentTrack);
  const isPlaying = useSelector((state: RootState) => state.song.isPlaying);

  const {volume, handleVolumeChange} = useVolumeControl(audioRef);
  const {currentTime, duration, handleSeek} = useTimelineControl(audioRef);
  const {playTrack, pauseTrack, playNextTrack, playPrevTrack} = useTrackControl({
    audioRef, 
    data, 
    currentTrack: currentTrack!,
  });

  const { handleAddFavoriteSong } = useAddToFavorite();


  const addFavoriteSong = () => {
    if(currentTrack) {
      handleAddFavoriteSong(currentTrack);
    }
  }

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
        {/* Подумать над тем чтобы вынести эти кнопки в список по которому проходится map */}
        <ControlButton theme = 'rewind' />
        <ControlButton theme = 'prev' onClick={playPrevTrack} />
        <ControlButton theme = {isPlaying ? 'pause' : 'play'} onClick={isPlaying ? pauseTrack : playTrack} />
        <ControlButton theme = 'next' onClick={playNextTrack} />
        <ControlButton theme = 'forward' />
      </div>
      <OptionalInput type='l' min={0} max={duration} value={currentTime} onChange={handleSeek} />
      <div className={styles['volume-box']}>
        <img className={styles['volume-icon']} src={volumeIcon} alt="Громкость" />
        <OptionalInput type='s' min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange} />
      </div>
      <div className={styles['optional-container']}>
          <OptionalButton theme = 'shuffle' />
          <OptionalButton theme = 'replay' />
          <LikeButton onClick={addFavoriteSong} />
          <OptionalButton theme = 'share' />
      </div>
    </>
  )
}
