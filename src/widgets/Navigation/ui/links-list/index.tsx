import React from 'react';
import styles from './styles.module.scss';
import NavLink from '@/shared/ui/nav-link';

interface LinkParams {
  id: number;
  link: string;
  theme: string;
  text: string;
}

interface LinksListParams {
  data: LinkParams[];
}

export const LinksList: React.FC<LinksListParams> = ({data}) => {
  return (
    <div className={styles.menu}>
      {data.map((item) => (
        <NavLink key={item.id} link={item.link} theme={item.theme} text={item.text} />
      ))}
    </div>
  )
}
