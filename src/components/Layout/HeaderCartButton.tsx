import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCart.module.css';

import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from "react";

interface IProps {
    onClick: () => void;
}

const HeaderCartButton = ({ onClick }: IProps) => {
    const [btnIsHightLighted, setBtnIsHightLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item: any) => {
        return curNumber + item.amount;

    }, 0);



    const btnClasses = `${classes.button} ${btnIsHightLighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHightLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHightLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <button className={btnClasses} onClick={onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;