import React from 'react';
import { GenreCard } from '@/entities/genre-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Mousewheel } from 'swiper/modules';
import useResize from '@/features/resize';

interface CardParams {
    id: number,
    title: string,
    image: string,
    length: number,
    idLiked: boolean,
}

interface CardListParams {
    data: CardParams[];
}
export const CardList: React.FC<CardListParams> = ({data}) => {

    const width = useResize();

    return (
        <Swiper
            modules={[Navigation, Mousewheel]}
            spaceBetween={20}
            slidesPerView={ width > 1078 ? 3 : width > 860 ? 2 : 1 }
            navigation={ width > 860 ? true : false }
            scrollbar={{ draggable: true }}
            mousewheel={true}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <GenreCard title={item.title} image={item.image} length={item.length} />
                </SwiperSlide>
            ))}
        </Swiper>      
    )
}
