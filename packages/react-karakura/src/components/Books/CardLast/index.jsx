import Rating from '@material-ui/lab/Rating';
import { Card, CardContent, Typography, Box } from '@material-ui/core';

import useStyles from './styles';

const CardLast = ({ product }) => {
    const classes = useStyles();
    const random_rating = Math.floor(Math.random() * 6) + 1;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Box className={classes.cardContent}>
                    <img src={product.imagePath} width='80px' height='70px' className={classes.cardMedia} />
                    <Box>
                        <Typography className={classes.label}>{product.name}</Typography>
                        <Typography className={classes.label}>S./ {product.price}</Typography>
                        <Rating name="read-only" value={random_rating} readOnly />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CardLast;
