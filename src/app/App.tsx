import React from 'react';
import styles from './styles.module.scss';
import { Navigation } from '@/widgets/navigation';
import { Content } from '@/widgets/content';
import { PersonalList } from '@/widgets/personal-list';
import { Player } from '@/widgets/player';
import { TrackProvider } from '@/features/audio-player/utils/audioContext';

export default function App() {
  return (
    <TrackProvider>
      <div className={styles.app}>
        <Navigation />
        <Content />
        <PersonalList />
        <Player />
      </div>
    </TrackProvider>
  )
}
