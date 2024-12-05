import classes from './ModelParameters.module.scss';

export const ModelParameters = () => {
    return (
        <div className={classes.ModelOptionsContainer}>
            <div className={classes.ModelOptionsHeader}>Optimized parameters for Yeoh</div>

            <div className={classes.ModelOptionsOptions}>
                <div className={classes.ModelOptionsItem}>
                    <div>params0:</div>
                    <code> 0.11477015672425277</code>
                </div>
                <div className={classes.ModelOptionsItem}>
                    <div>params1:</div>
                    <code> 0.000266833580181705</code>
                </div>
                <div className={classes.ModelOptionsItem}>
                    <div>params2:</div>
                    <code> 0.0</code>
                </div>
                <div className={classes.ModelOptionsItem}>
                    <div>Max relative error:</div>
                    <code> 1.00</code>
                </div>

            </div>
        </div>
    )
}