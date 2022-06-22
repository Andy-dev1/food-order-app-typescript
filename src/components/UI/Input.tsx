import classes from './Input.module.css';
import React from 'react';

interface IObjectInput{
    id: string,
    type: string,
    min: string,
    max: string,
    step: string,
    defaultValue: string
}

interface IInput {
    input: IObjectInput;
    label: string;
}

const Input = React.forwardRef((props: IInput,ref:any) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
});

export default Input;