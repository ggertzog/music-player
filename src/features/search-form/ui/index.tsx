import React from "react";
import styles from './styles.module.scss';
import SearchInput from "@/shared/ui/search-input";

export const SearchForm = () => {
    return (
        <form className={styles.form}>
            <SearchInput />
        </form>
    )
}