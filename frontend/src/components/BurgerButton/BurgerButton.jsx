import MenuIcon from '@mui/icons-material/Menu';
import classes from './BurgerButton.module.scss';

export const BurgerButton = () => {
    return (
        <div className={classes.BurgerButton}>
            <MenuIcon />
        </div>
    )
}