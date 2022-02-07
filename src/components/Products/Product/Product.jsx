import { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Chip, Collapse, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { AddShoppingCart, Favorite, Share, ExpandLess, ExpandMore } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {product.editorial}
                    </Typography>
                </div>
                <Rating name="read-only" value={3} readOnly />
                <Box display='flex' flexDirection='row-reverse'>
                    <Chip label={`S/ ${product.price}`} color="primary"/>
                </Box>
            </CardContent>
            <CardActions display='flex' justifyContent='space-between'>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart />
                </IconButton>
                <IconButton className={classes.rightAlignItem} aria-label="expand" onClick={handleExpandClick}>{expanded ? <ExpandMore /> : <ExpandLess />}</IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Descripcion:</Typography>
                    <Typography paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Product;
