import React, { useContext } from "react";
import { Button, Grid, Typography } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import { UserContext } from '../../UserContext';
import { login } from '../../services/login';

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
    const { user, setUser } = useContext(UserContext);
    const classes = useStyles();



    return (
        <main className={classes.content}>
            {/* va a anadir el height, la cantida exacta de pixels que el navbar tiene; va a empujar un poquito abajo los productos */}

            <div className={classes.toolbar} />
            <Typography variant="h6">
                {JSON.stringify(user, null, 2)}
            </Typography>
            {user ? (
                <Button variant="outlined" onClick={() => {
                    // llamar la backend el logout
                    setUser(null)
                }}>logout</Button>
            ) : (
                <Button variant="outlined" onClick={async () => {
                    const user = await login();
                    setUser(user);
                }}>Log In
                </Button>
            )
            }

            <Grid container justify="center" spacing={4}>
                {dummyProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main >
    )
}

export default Products;