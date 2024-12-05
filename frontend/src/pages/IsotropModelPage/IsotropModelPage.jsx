import classes from './IsotropModelPage.module.scss';
import {ModelChooseHeader} from "../../components/ModelChooseHeader/ModelChooseHeader.jsx";
import {ModelOptions} from "../../components/ModelOptions/ModelOptions.jsx";
import {DragNDrop} from "../../components/DragNDrop/DragNDrop.jsx";
import fit from './fit.png';
import predict from './predict.png';
import {BurgerButton} from "../../components/BurgerButton/BurgerButton.jsx";
import {ModelParameters} from "../../components/ModelParameters/ModelParameters.jsx";
import {Modal} from "../../components/Modal/Modal.jsx";

export const IsotropModelPage = () => {
    return (
        <>
            <BurgerButton />
            <ModelChooseHeader/>
            {/*<Modal />*/}
            <div className={classes.IsotropModelPageBody}>
                <div className={classes.IsotropModelPageInputs}>
                    <ModelOptions/>
                    <DragNDrop/>
                </div>
                <div className={classes.IsotropModelPageButtons}>
                    <button className={classes.FitButton}>
                        Fit
                    </button>
                    <button className={classes.PredictButton}>
                        Predict
                    </button>
                </div>
                <ModelParameters />
                <div className={classes.ChartContainer}>
                    <img src={fit} alt="fit"/>
                    <img src={predict} alt="fit"/>
                </div>
            </div>

        </>
    )
}