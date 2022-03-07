import { useContext, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import useStyles from "./styles";
import { shoppingContext } from "../../hook/shopping";

export default function ShoppingCar() {
    const classes = useStyles();
    const { shopping, removeProducts } = useContext(shoppingContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let suma = 0;
        if (shopping.length > 1)
            suma = shopping.reduce((a, b) => a.price + b.price);
        else if (shopping.length === 1) suma = shopping[0].price;
        else suma = 0;
        setTotal(suma);
    }, [shopping]);

    return (
        <Grid item xs={11} className={classes.root}>
            <Grid container justifyContent="space-between">
                <Grid item xs={8}>
                    {shopping.map((item, index) => (
                        <Grid container justifyContent="space-between" key={index}>
                            <Grid item xs={7}>
                                {index === 0 && (
                                    <Typography className={classes.label}>Producto</Typography>
                                )}
                                <Box display="flex" alignItems="center">
                                    <img src={item.image} height="100px" width="100px" />
                                    <Box ml={2}>
                                        <Typography>{item.name}</Typography>
                                        <Typography>{item.editorial}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                {index === 0 && (
                                    <Typography align="center" className={classes.label}>
                                        Precio
                                    </Typography>
                                )}
                                <Box className={classes.celda}>
                                    <Typography align="center">{item.price}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                {index === 0 && (
                                    <Typography align="center" className={classes.label}>
                                        Accion
                                    </Typography>
                                )}
                                <Box className={classes.celda}>
                                    <IconButton onClick={() => removeProducts(item)}>
                                        <DeleteOutlineOutlinedIcon className={classes.icon} />
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Divider className={classes.divider} />
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.card}>
                        <Box className={classes.header}>
                            <Typography className={classes.labelHeader}>RESUMEN</Typography>
                        </Box>
                        <Box className={classes.container}>
                            <Typography className={classes.labelContainer}>
                                Cantidad: {shopping.length}
                            </Typography>
                            {total > 0 && (
                                <Typography className={classes.labelContainer}>
                                    Total S/. : {total}
                                </Typography>
                            )}
                            {total > 0 &&
                                <Box display="flex" justifyContent='center' alignItems='center'>
                                    <Button className={classes.btn}>PAGAR</Button>
                                </Box>}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}
