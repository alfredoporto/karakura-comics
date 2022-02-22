import React from "react";
import { Grid, Box } from '@material-ui/core';

import Product from '../../components/Product/Product';
import Sidebar from '../../components/Sidebar';

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

const Products = () => {

    return (
        <Grid container>
            <Grid item xs={2}><Sidebar /></Grid>
            <Grid item xs={10} style={{marginTop: '15px', backgroundColor: 'white'}}>
                <Grid container direction="row" justifyContent="space-between">
                    {dummyProducts.map((product) => <Grid item xs={4} sx={{ mb: 2 }}><Product product={product} /></Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Products;