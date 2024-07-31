import React from 'react';
import styles from './styles.module.scss';
import search from '@/shared/assets/icons/search.svg';

const SearchInput = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input} placeholder="Search Music, Artist, Genre" />
            <img className={styles.image} src={search} alt="Лупа" />
        </div>
    )
}

export default SearchInput;