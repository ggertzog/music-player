import React, { FC } from 'react';
import styles from './styles.module.scss';
import dash from '@/shared/assets/icons/menu.svg';
import profile from '@/shared/assets/icons/user.svg';
import favorite from '@/shared/assets/icons/favorite.svg';
import chat from '@/shared/assets/icons/chat.svg';
import friends from '@/shared/assets/icons/friends.svg';

interface ILink {
  readonly theme: 'dash' | 'profile' | 'favorite' | 'chat' | 'friends';
  readonly text: string
}

const NavLink: FC<ILink> = ({theme, text}) => {

  let image;
  switch(theme) {
    case 'dash': 
      image = dash;
      break;
    case 'profile': 
      image = profile;
      break;
    case 'favorite':
      image = favorite;
      break;
    case 'chat':
      image = chat;
      break;
    case 'friends':
      image = friends;
      break;
    default:
      image = favorite;
  }

  return (
    <a className={styles.link} href='#'><img className={styles.image} src={image} alt={theme} />{text}</a>
  )
}

export default NavLink;