import { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import useStyles from './styles';
import { shoppingContext } from '../../hook/shopping';

export default function ShoppingCar() {
    const classes = useStyles();
    const {shopping,removeProducts} = useContext(shoppingContext);

    return (
        <Grid item xs={6} className={classes.root}>
            <Grid container className={classes.header}>
                <Grid item xs={4}><Typography className={classes.label}>Nombre</Typography></Grid>
                <Grid item xs={2}><Typography className={classes.label}>Precio</Typography></Grid>
                <Grid item xs={2}><Typography className={classes.label}>Cantidad</Typography></Grid>
                <Grid item xs={2}><Typography className={classes.label}>Eliminar</Typography></Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center'>
                {shopping.map((item) =>
                    <>
                        <Grid container justifyContent='space-between' alignItems='center'>
                            <Grid item xs={4}><Typography color='white'>{item.name}</Typography></Grid>
                            <Grid item xs={2}><Typography className={classes.sublabel}>{item.price}</Typography></Grid>
                            <Grid item xs={2}><Typography className={classes.sublabel}>10</Typography></Grid>
                            <Grid item xs={2}><IconButton onClick={() => removeProducts(item)}><DeleteOutlineOutlinedIcon className={classes.icon} /></IconButton></Grid>
                        </Grid>
                        <Divider className={classes.divider} />
                    </>
                )}
            </Grid>
            <Grid container className={classes.header}>
                <Grid item xs={9}><Typography className={classes.label}>TOTAL A PAGAR</Typography></Grid>
                <Grid item xs={2}><Button variant='contained' style={{backgroundColor: '#000e44', color: 'white'}}>Pagar</Button></Grid>
            </Grid>
        </Grid>
    )
}
