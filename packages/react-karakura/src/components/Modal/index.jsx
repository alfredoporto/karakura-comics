import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CloseIcon from '@material-ui/icons/CloseOutlined';
import { useNavigate } from "react-router-dom";
import { deleteAll } from "../../services/shopping";
import useStyles from "./styles";

function Modal({ data }) {
    const {
        data: { billing_details: client },
    } = data;
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    let navigate = useNavigate();

    const handleClose = async () => {
        setOpen(false);
        navigate("/products", { replace: true });
        await deleteAll();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.root}>
                <DialogContentText id="alert-dialog-description">
                    <Box display="flex" flexDirection='column' alignItems='center' className={classes.header}>
                        <img src="./Images/Karakura-4.gif" width='80px' height='80px' />
                        <Typography className={classes.title}>Compra Exitosa</Typography>
                        <IconButton className={classes.iconClose} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography className={classes.sublabel}>
                        {`Estimado cliente ${client.name} gracias por su preferencia.`}
                    </Typography>
                    <Typography className={classes.sublabel}>
                        En el transcurso de 7 días estaremos haciendo envío de los libros a la
                        dirección indicada
                    </Typography>
                    <Typography className={classes.address}>
                        {`Ciudad ${client.address.city}, Estado ${client.address.state}, País ${client.address.country}`}
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default Modal;
