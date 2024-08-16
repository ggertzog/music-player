// import React from 'react';
// import styles from './styles.module.scss';
// import NavLink from '@/shared/ui/nav-link';

// interface LinkParams {
//     id: number;
//     link: string;
//     theme: string;
//     text: string;
// }

// interface LinksListParams {
//     data: LinkParams[];
// }

// export const Dropdown: React.FC<LinksListParams> = ({data}) => {
    
//     return (
//         <div className={styles.dropdown}>
//             <nav className={styles.nav}>
//                 <input className={styles.checkbox} id="toggle" type="checkbox" />
//                 <div className={styles['border-gradient']}>
//                     <p className={styles.title}>Menu</p>
//                 </div>
//                 <ul className={styles.list}>
//                     {data.map((item) => (
//                         <NavLink key={item.id} link={item.link} theme={item.theme} text={item.text} />
//                     ))}
//                 </ul>
//             </nav>
//         </div>
//     )
// }

import React from 'react';
import styles from './styles.module.scss';

interface LinkParams {
    id: number;
    link: string;
    theme: string;
    text: string;
}

interface DropdownProps<T> {
    title: string;
    data: T[];
    renderItem: (item: T) => React.ReactNode;
}

export const Dropdown = <T extends {}>({ title, data, renderItem }: DropdownProps<T>) => {
    return (
        <div className={styles.dropdown}>
            <nav className={styles.nav}>
                <input className={styles.checkbox} id="toggle" type="checkbox" />
                <div className={styles['border-gradient']}>
                    <p className={styles.title}>{title}</p>
                </div>
                <ul className={styles.list}>
                    {data.map((item) => (
                        <li key={(item as any).id} className={styles.listItem}>
                            {renderItem(item)}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
