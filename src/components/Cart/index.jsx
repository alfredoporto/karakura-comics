import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import useStyles from './styles';

const dummyProducts = [
    { id: 1, name: 'Steel Ball Run 01', editorial: 'Ivrea', price: 60, image: 'https://i1.whakoom.com/large/37/3f/ac9dad6b26a845b086b1e77d46b12631.jpg' },
    { id: 2, name: 'Steel Ball Run 02', editorial: 'Ivrea', price: 60, image: 'https://i1.whakoom.com/large/14/2a/fc474cfaea6742a48fb8dc43da44c26b.jpg' },
    { id: 3, name: 'Jujutsu Kaisen 13', editorial: 'Norma', price: 40, image: 'https://i1.whakoom.com/large/28/0b/d3db419132614a0b9491ee81304b42dd.jpg' },
    { id: 4, name: 'Steel Ball Run 01', editorial: 'Ivrea', price: 60, image: 'https://i1.whakoom.com/large/37/3f/ac9dad6b26a845b086b1e77d46b12631.jpg' },
    { id: 5, name: 'Steel Ball Run 02', editorial: 'Ivrea', price: 60, image: 'https://i1.whakoom.com/large/14/2a/fc474cfaea6742a48fb8dc43da44c26b.jpg' },
    { id: 6, name: 'Jujutsu Kaisen 13', editorial: 'Norma', price: 40, image: 'https://i1.whakoom.com/large/28/0b/d3db419132614a0b9491ee81304b42dd.jpg' },
    { id: 7, name: 'Steel Ball Run 02', editorial: 'Ivrea', price: 60, image: 'https://i1.whakoom.com/large/14/2a/fc474cfaea6742a48fb8dc43da44c26b.jpg' },
    { id: 8, name: 'Jujutsu Kaisen 13', editorial: 'Norma', price: 40, image: 'https://i1.whakoom.com/large/28/0b/d3db419132614a0b9491ee81304b42dd.jpg' }
];

export default function ShoppingCar() {
    const classes = useStyles();

    return (
        <Grid item xs={6} className={classes.root}>
            <Grid container className={classes.header}>
                <Grid item xs={4}><Typography className={classes.label}>Nombre</Typography></Grid>
                <Grid item xs={2}><Typography className={classes.label}>Precio</Typography></Grid>
                <Grid item xs={2}><Typography className={classes.label}>Cantidad</Typography></Grid>
                <Grid item xs={2}><Typography className={classes.label}>Eliminar</Typography></Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center'>
                {dummyProducts.map((item) =>
                    <>
                        <Grid container justifyContent='space-between' alignItems='center'>
                            <Grid item xs={4}><Typography>{item.name}</Typography></Grid>
                            <Grid item xs={2}><Typography className={classes.sublabel}>{item.price}</Typography></Grid>
                            <Grid item xs={2}><Typography className={classes.sublabel}>10</Typography></Grid>
                            <Grid item xs={2}><IconButton><DeleteOutlineOutlinedIcon className={classes.icon} /></IconButton></Grid>
                        </Grid>
                        <Divider className={classes.divider} />
                    </>
                )}
            </Grid>
            <Grid container className={classes.header}>
                <Grid item xs={9}><Typography className={classes.label}>TOTAL A PAGAR</Typography></Grid>
                <Grid item xs={2}><Button variant='contained'>Pagar</Button></Grid>
            </Grid>
        </Grid>
    )
}
