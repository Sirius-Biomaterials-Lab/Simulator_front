import classes from './Modal.module.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Modal = () => {
    return (
        <div className={classes.Modal}>
            <div className={classes.ModalWindow}>
                <div className={classes.ModalWindowHeader}>
                    Completed!
                </div>
                <div className={classes.ModalWindowBody}>
                    <CheckCircleIcon fontSize="large" />
                    <div className={classes.ModalWindowBodyInfo}>
                        <div>Model fitting completed</div>
                        <div>R^2: 1.00</div>
                        <div>Max relative error: 1.00</div>
                    </div>
                </div>
                <div className={classes.ModalButton}>OK</div>
            </div>
        </div>
    )
}