import classes from './Card.module.css';
import React from 'react';

interface IProps{
    children:React.ReactNode;
}

const Card = ({children}:IProps)=>{
    return<div className={classes.card}>{children}</div>
};

export default Card;