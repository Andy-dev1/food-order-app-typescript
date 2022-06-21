import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCart.module.css';

interface IProps{
    onClick:()=>void;
}

const HeaderCartButton = ({onClick}:IProps) => {
    return <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
};

export default HeaderCartButton;