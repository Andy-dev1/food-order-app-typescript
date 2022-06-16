import classes from './Input.module.css';

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

const Input = (props: IInput) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
};

export default Input;