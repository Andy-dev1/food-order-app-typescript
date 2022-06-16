import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

interface IMeal {
    key?:string;
    id: string;
    name: string;
    description: string;
    price: number;
}

const MealItem = (props: IMeal) => {
    const price=`$${props.price.toFixed(2)}`;

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm/>
        </div>
    </li>
};

export default MealItem;