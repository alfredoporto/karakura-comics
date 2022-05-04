import { useState, useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import useStyles from "./styles";
import { getAllItems, deleteItem } from '../../../services/shopping';
import Resume from '../Resume';

export default function ShoppingCar() {
    const classes = useStyles();
    const bills = useRef(0);
    const [books, setBooks] = useState([]);


    useEffect(() => {
        async function getShopCar() {
            try {
                const response = await getAllItems();
                bills.current = response.bill;
                if (response) setBooks(response.books);
                else setBooks([]);
                console.log(response);
            } catch (error) {
                setBooks([]);
                console.log(error);
            }
        }
        getShopCar();
    }, []);

    const deleteBook = async (id) => {
        const params = { bookId: id };
        await deleteItem(params);
        const response = await getAllItems();
        setBooks(response.books);
    }


    return (
        <Grid item xs={11} className={classes.root}>
            <Grid container justifyContent="space-between">
                <Grid item xs={8}>
                    {books.length > 0 ? (
                        books.map((item, index) => (
                            <Grid container justifyContent="space-between" key={index}>
                                <Grid item xs={5}>
                                    {index === 0 && (
                                        <Typography className={classes.label}>Producto</Typography>
                                    )}
                                    <Box display="flex" alignItems="center">
                                        <img src={item.imagePath} height="80px" width="80px" />
                                        <Box ml={2}>
                                            <Typography className={classes.label}>{item.name}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    {index === 0 && (<Typography align="center" className={classes.label}> Cantidad </Typography>)}
                                    <Box className={classes.celda}>
                                        <Typography align="center" className={classes.label}>{item.quantity}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    {index === 0 && (<Typography align="center" className={classes.label}>Precio</Typography>)}
                                    <Box className={classes.celda}>
                                        <Typography align="center" className={classes.label}>{item.price}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box className={classes.celda}>
                                        <IconButton onClick={() => deleteBook(item.bookId)}>
                                            <DeleteOutlineOutlinedIcon className={classes.icon} />
                                        </IconButton>
                                    </Box>
                                </Grid>
                                <Divider className={classes.divider} />
                            </Grid>
                        ))
                    ) : (
                        <Box className={classes.cesta}>
                            <img src="./Images/carrito.png" height="250px" width="250px" />
                        </Box>
                    )}
                </Grid>
                <Grid item xs={3}>
                    <Resume data={books} total={bills.current} />
                </Grid>
            </Grid>
        </Grid>
    );
}
