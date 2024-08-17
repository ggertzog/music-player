import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
// import Preloader from '@/shared/ui/preloader';
import { Dashboard } from '@/pages/dashboard';
import { ChatPage } from '@/pages/chat-page';
import { FavoritePage } from '@/pages/favorite-page';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Player } from '@/widgets/player';

export default function App() {
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();
  const currentTrack = useSelector((state: RootState) => state.song.currentTrack);
  const audioRef = useRef<HTMLAudioElement>(null);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //     navigate('/'); // Переход на главную страницу после завершения загрузки
  //   }, 9000); // Имитация времени загрузки

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Preloader />;
  // }

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Dashboard audioRef={audioRef} />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
      </Routes>
      {currentTrack && <Player audioRef={audioRef} />}
    </div>
  );
}
