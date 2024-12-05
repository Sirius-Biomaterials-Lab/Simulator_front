import classes from './ModelChooseHeader.module.scss';

export const ModelChooseHeader = () => {
    return (
        <header className={classes.ModelChooseHeader}>
            <div className={`${classes.ModelChooseHeaderItem} ${classes.active}`}>изотропный</div>
            <div className={classes.ModelChooseHeaderItem}>аниизотропный</div>
            <div className={classes.ModelChooseHeaderItem}>cann</div>
        </header>
    )
}