import React from 'react';
import styles from './styles.module.scss';
import { Navigation } from '@/widgets/navigation';
import { Content } from '@/widgets/content';
import { PersonalList } from '@/widgets/personal-list';

export default function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Content />
      <PersonalList />
    </div>
  )
}
