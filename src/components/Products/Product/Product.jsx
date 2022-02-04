import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles(); 

  return (
  <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name} />
      <CardContent>
          <div className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
                  {product.name}
              </Typography>

              <Typography variant="h5">
                  {product.price}
              </Typography>

              <Typography variant="h2" color="textSecondary">
                  {product.editorial}
              </Typography>
          </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to cart">
              <AddShoppingCart />
          </IconButton>

      </CardActions>
  </Card>
  );
};

export default Product;
