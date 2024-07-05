import React from "react";
import styles from './styles.module.scss';
import { User } from "@/entities/user";

export const PersonalList = () => {
    return (
        <div className={styles.container}>
            <User />
        </div>
    )
}