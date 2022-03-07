import { useState, useContext } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Chip, Collapse, Box, Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { ShoppingCart, Favorite, Share, ExpandLess, ExpandMore } from '@material-ui/icons';
import { shoppingContext } from '../../hook/shopping';

import useStyles from './styles';

const Product = ({ product }) => {
    const { addProducts, removeProducts } = useContext(shoppingContext);
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [like, setLike] = useState(false);
    const [shop, setShop] = useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleShop = (producto) => {
        if (shop)
            removeProducts(producto);
        else
            addProducts(producto);
        setShop(!shop);
    }

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom className={classes.label}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.label}>
                        {product.editorial}
                    </Typography>
                </div>
                <Rating name="read-only" value={3} readOnly />
                <Box display='flex' flexDirection='row-reverse'>
                    <Chip label={`S/ ${product.price}`} className={classes.price} />
                </Box>
            </CardContent>
            <CardActions display='flex'>
                <Grid container justifyContent='space-between'>
                    <Box display={'flex'}>
                        <IconButton aria-label="add to favorites" onClick={() => setLike(!like)}>
                            <Favorite className={like ? classes.likeActive : classes.likeDeactive} />
                        </IconButton>
                        <IconButton aria-label="Add to cart" onClick={() => handleShop(product)}>
                            <ShoppingCart className={shop ? classes.shopActive : classes.shopDeactive} />
                        </IconButton>
                    </Box>
                    <IconButton className={classes.expand} aria-label="expand" onClick={handleExpandClick}>{expanded ? <ExpandMore /> : <ExpandLess />}</IconButton>
                </Grid>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className={classes.label}>Descripcion:</Typography>
                    <Typography paragraph className={classes.label}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <Typography className={classes.label}>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Product;
