import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar";
import { getProducts } from "../../services/commerce";
import useStyles from './styles';


const Products = () => {
    const [productos, setProductos] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        async function getArrayProducts() {
            try {
                const response = await getProducts();
                console.log(response);
                setProductos(response);
            } catch (error) {
                setProductos([]);
                console.log(error);
            }
        }
        getArrayProducts();
    }, []);

    return (
        <Grid container>
            <Grid item xs={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={10} className={classes.root}>
                {productos.length < 1 ?
                    <Box className={classes.containerLoad}>
                        <CircularProgress className={classes.loader} />
                    </Box>
                    :
                    <Grid container direction="row" justifyContent="space-between">
                        {productos.map((product, index) => (
                            <Grid key={index} item xs={4} sx={{ mb: 2 }}>
                                <Product product={product} />
                            </Grid>
                        ))}
                    </Grid>}
            </Grid>
        </Grid>
    );
};

export default Products;
