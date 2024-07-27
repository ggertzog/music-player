import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { TrackProvider } from '@/features/audio-player/utils/audioContext';
import Preloader from '@/shared/ui/preloader';
import { Dashboard } from '@/pages/dashboard';
import { ChatPage } from '@/pages/chat-page';

export default function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/'); // Переход на главную страницу после завершения загрузки
    }, 9000); // Имитация времени загрузки

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <TrackProvider>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<ChatPage />} />
          {/* Добавьте другие маршруты здесь, если они есть */}
        </Routes>
      </div>
    </TrackProvider>
  );
}
