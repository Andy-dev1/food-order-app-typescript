import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

interface IProps {
    onClose: () => void;
}

const Cart = ({ onClose }: IProps) => {
    const cartCtx = useContext(CartContext);

    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;

    const cartItemRemoveHandler=(id:any)=>{

    };
    const cartItemAddHandler=(item:any)=>{

    };

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item:any) => <CartItem key={item.id} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} name={item.name}/>)}</ul>;

    return <Modal onClose={onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
};

export default Cart;