import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import dash from '@/shared/assets/icons/menu.svg';
import profile from '@/shared/assets/icons/user.svg';
import favorite from '@/shared/assets/icons/favorite.svg';
import chat from '@/shared/assets/icons/chat.svg';
import friends from '@/shared/assets/icons/friends.svg';

interface ILink {
  readonly theme: 'dash' | 'profile' | 'favorite' | 'chat' | 'friends';
  readonly text: string;
  readonly link: string;
}

const NavLink: FC<ILink> = ({theme, text, link}) => {

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
    <Link className={styles.link} to={link}><img className={styles.image} src={image} alt={theme} />{text}</Link>
  )
}

export default NavLink;