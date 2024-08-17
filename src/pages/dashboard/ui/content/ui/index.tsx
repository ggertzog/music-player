import React from "react";
import styles from './styles.module.scss';
import { SearchForm } from "@/features/search-form";
import { DiscoverGenre } from "@/widgets/discover-genre";
import { SongsWidget } from "@/widgets/songs-widget";
import useResize from "@/features/resize";
import { PersonalList } from "@/widgets/personal-list";
import { BurgerMenu } from "@/widgets/burger-menu";
import { SideBar } from "@/features/sidebar";

interface ContentParams {
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const Content: React.FC<ContentParams> = ({audioRef}) => {

    const width = useResize();

    return (
        <div className={styles.container}>
            {/* <div className={styles['container-box']}> */}
                {/* {width < 860 && <BurgerMenu />} */}
                {width < 860 && <SideBar />}
                <SearchForm />
            {/* </div> */}
            <DiscoverGenre />
            <SongsWidget audioRef={audioRef} />
            {width < 1440 && <PersonalList />}
        </div>
    )
}