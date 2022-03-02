import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar";
import { getProducts } from "../../services/commerce";

const Products = () => {
    const [productos, setProductos] = useState([]);

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
                <Grid item xs={10} style={{ marginTop: "15px", backgroundColor: "black" }}>
                    {productos.length < 1 ?
                        <Box display='flex' justifyContent="center" mt='250px'>
                            <CircularProgress />
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
