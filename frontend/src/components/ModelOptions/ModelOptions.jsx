import classes from './ModelOptions.module.scss';

export const ModelOptions = () => {
    return (
        <div className={classes.ModelOptionsContainer}>
            <div className={classes.ModelOptionsHeader}>Model options</div>

            <div className={classes.ModelOptionsOptions}>
                <div className={classes.ModelOptionsItem}>
                    <div>Select hyperelastic model:</div>
                    <div><select className={classes.ModelOptionsItemDropdown}>
                        <option value={'yeoh'}>Yeoh</option>
                        <option value={'neohookean'}>NeoHookean</option>
                        <option value={'gen-mooney'}>Generalized Mooney-Rivlin</option>
                        <option value={'mooney'}>Mooney-Rivlin</option>
                        <option value={'beda'}>Beda</option>
                        <option value={'gent'}>Gent</option>
                        <option value={'gent-gent'}>Gent-Gent</option>
                        <option value={'mod-gent'}>Mod_Gent-Gent</option>
                    </select>
                    </div>
                </div>
                <div className={classes.ModelOptionsItem}>
                    <div>Select error function:</div>
                    <select className={classes.ModelOptionsItemDropdown}>
                        <option value={'r_abs_err_sigma'}>R_abs_err_sigma</option>
                        <option value={'r_abs_err_P'}>R_abs_err_P</option>
                        <option value={'r-rel-err'}>R_rel_err</option>
                    </select>
                </div>
            </div>
        </div>
    )
}