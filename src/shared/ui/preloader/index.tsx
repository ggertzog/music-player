import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';



const Preloader: React.FC = () => {

    const el1 = useRef<HTMLDivElement>(null);
    const el2 = useRef<HTMLDivElement>(null);
    const el3 = useRef<HTMLParagraphElement>(null);
    
    useEffect(() => {
        if (el1.current && el2.current && el3.current) {
            // Анимация для первого элемента
            gsap.fromTo(el1.current, {
                opacity: 1
            }, {
                opacity: 0,
                duration: 1.5,
                delay: 3.5,
                onComplete: () => {
                    // После завершения анимации второго элемента, начать анимацию третьего элемента
                    gsap.to(el3.current, {
                        opacity: 1,
                        duration: 1.5,

                        onComplete: () => {
                            gsap.to(el3.current, {
                                opacity: 0,
                                duration: 1.5,
                            })
                        }
                    });
                }
            });

            // Анимация для второго элемента с задержкой
            gsap.fromTo(el2.current, {
                y: 50,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 2,
                delay: 0.5,
                
            });
        }
    }, []);

    return (
        <div className={styles.preloader}>
            <div className={styles.container}>
                <p ref={el3}>Welcome!</p>
            </div>
            <div className={styles['loading-page']} ref={el1}>
                <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15C0 13.3431 1.34315 12 3 12C4.65685 12 6 13.3431 6 15V28C6 29.6569 4.65685 31 3 31C1.34315 31 0 29.6569 0 28V15Z" fill="url(#paint0_linear_104_76)"/>
                    <path d="M7 11C7 9.34315 8.34315 8 10 8C11.6569 8 13 9.34315 13 11V32C13 33.6569 11.6569 35 10 35C8.34315 35 7 33.6569 7 32V11Z" fill="url(#paint1_linear_104_76)"/>
                    <path d="M14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7V36C20 37.6569 18.6569 39 17 39C15.3431 39 14 37.6569 14 36V7Z" fill="url(#paint2_linear_104_76)"/>
                    <path d="M21 3C21 1.34314 22.3431 0 24 0C25.6569 0 27 1.34315 27 3V40C27 41.6569 25.6569 43 24 43C22.3431 43 21 41.6569 21 40V3Z" fill="url(#paint3_linear_104_76)"/>
                    <path d="M28 17C28 15.3431 29.3431 14 31 14C32.6569 14 34 15.3431 34 17V26C34 27.6569 32.6569 29 31 29C29.3431 29 28 27.6569 28 26V17Z" fill="url(#paint4_linear_104_76)"/>
                    <path d="M35 21C35 19.3431 36.3431 18 38 18C39.6569 18 41 19.3431 41 21V22C41 23.6569 39.6569 25 38 25C36.3431 25 35 23.6569 35 22V21Z" fill="url(#paint5_linear_104_76)"/>
                </svg>
                <div className={styles['name-container']}>
                    <div className={styles['logo-name']} ref={el2}>Music</div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;