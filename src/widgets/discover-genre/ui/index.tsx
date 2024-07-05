import React from "react";
import styles from './styles.module.scss';
import { Card } from "@/entities/card";
import note from '@/shared/assets/icons/note.svg';
import data from '../model/mock-data';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Mousewheel } from 'swiper/modules';

export const DiscoverGenre = () => {

    return (
        <div className={styles['list']}>
            <div className={styles.description}>
                <img className={styles.image} src={note} alt="Нота"/>
                <h2 className={styles.title}>Discover Genre</h2>
            </div>
            <div className={styles.container}>
                <Swiper
                    modules={[Navigation, Mousewheel]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    scrollbar={{ draggable: true }}
                    // pagination={{ clickable: true }}
                    mousewheel={true}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card title={item.title} image={item.image} length={item.length} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}