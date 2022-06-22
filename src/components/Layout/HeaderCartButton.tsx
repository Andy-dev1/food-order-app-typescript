import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCart.module.css';

import CartContext from '../../store/cart-context';
import { useContext } from "react";

interface IProps{
    onClick:()=>void;
}

const HeaderCartButton = ({onClick}:IProps) => {
    const cartCtx=useContext(CartContext);

    const numberOfCartItems=cartCtx.items.reduce((curNumber,item:any)=>{
        return curNumber + item.amount;
    },0);

    return <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;