import React from "react";
import { Grid } from  '@material-ui/core';

import Product from './Product/Product';

const dummyProducts = [
    { id: 1, name: 'Steel Ball Run 01', editorial:'Ivrea', price: 60 },
    { id: 2, name: 'Steel Ball Run 02', editorial:'Ivrea', price: 60 },
    { id: 3, name: 'Jujutsu Kaisen 13', editorial:'Norma', price: 40 }
];

const Products = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {dummyProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
   
}

export default Products;