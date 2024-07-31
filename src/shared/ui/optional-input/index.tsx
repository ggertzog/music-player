import React, { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface InputDurationParams extends React.InputHTMLAttributes<HTMLInputElement> {
    readonly type: 's' | 'l';
}

const OptionalInput: FC<InputDurationParams> = ({type, min, max, value, step, onChange}) => {
    return (
        <input 
            min={min} 
            max={max} 
            value={value}
            step={step}
            onChange={onChange} 
            className={cn('input', `input_type_${type}`)}
            type='range'
        />
    )
};

export default OptionalInput;