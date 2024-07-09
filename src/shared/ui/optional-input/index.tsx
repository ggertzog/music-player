import React, { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface InputParams {
    readonly type: 's' | 'l';
}

const OptionalInput: FC<InputParams> = ({type}) => {
    return (
        <input className={cn('input', `input_type_${type}`)} type='range'/>
    )
};

export default OptionalInput;