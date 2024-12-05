import classes from './DragNDrop.module.scss';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const DragNDrop = () => {
    return (
        <div className={classes.DragNDropContainer}>
            <FileUploadIcon />
            <div>Drag item or click to choose</div>
        </div>
    )
}