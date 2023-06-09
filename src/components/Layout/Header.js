import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.title}>ReactMeals</h1>
                <div className={classes.button}>
                    <HeaderCartButton onClick={props.onShowCart} />
                </div>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
};

export default Header;