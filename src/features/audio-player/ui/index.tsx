import React from 'react';
import styles from './styles.module.scss';
import ControlButton from '@/shared/ui/control-button';
import data from '@/widgets/songs-list/model/mock-data';
import OptionalInput from '@/shared/ui/optional-input';
import OptionalButton from '@/shared/ui/optional-button';
import volumeIcon from '@/shared/assets/icons/volume.svg';
import { LikeButton } from '@/features/like-button';
import { useTrack } from '../utils/audioContext';
import { useVolumeControl } from '../utils/useVolumeControl';
import { useTimelineControl } from '../utils/useTimelineControl';
import { useTrackControl } from '../utils/useTrackControl';

export const AudioPlayer = () => {

  const {currentTrack, setCurrentTrack, audioRef} = useTrack();

  const {volume, handleVolumeChange} = useVolumeControl(audioRef);
  const {currentTime, duration, handleSeek} = useTimelineControl(audioRef);
  const {playTrack, pauseTrack, playNextTrack, playPrevTrack, isPlaying} = useTrackControl({audioRef, data, setCurrentTrack});  

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
          <LikeButton />
          <OptionalButton theme = 'share' />
      </div>
    </>
  )
}
