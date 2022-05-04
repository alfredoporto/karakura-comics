import { useState, useContext, useRef, useEffect } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import {
    Typography,
    IconButton,
    Chip,
    Box,
} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import {
    ShoppingCart,
    Favorite,
    LocalOffer,
} from "@material-ui/icons";
import { shoppingContext } from "../../../hook/shopping";
import { addItem, deleteItem } from '../../../services/shopping';

import useStyles from "./styles";

const Card = ({ product }) => {
    const { addProducts, removeProducts } = useContext(shoppingContext);
    const classes = useStyles();
    const random_like = Math.random() < 0.5;
    const [like, setLike] = useState(random_like);
    const [shop, setShop] = useState(null);
    const [alertSucess, setAlertSucess] = useState(false);
    const [alertError, setAlertError] = useState(false);
    const bookID = useRef(null);
    const ref = useRef();

    useEffect(() => {
        if (shop !== null)
            shopBook();
    }, [shop]);

    const handleShop = (id) => {
        bookID.current = id;
        setShop(!shop);
    }

    const shopBook = async () => {
        if (shop) {
            const data = { bookId: bookID.current, quantity: 1 };
            await addItem(data);
            setAlertSucess(true);
            setAlertError(false);
            setTimeout(function() {setAlertSucess(false)}, 1000)
        } else {
            const params = { bookId: bookID.current };
            await deleteItem(params);
            setAlertSucess(false);
            setAlertError(true);
            setTimeout(function() {setAlertError(false)}, 1000);
        }
    }

    return (
        <>
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={ref}
                style={{
                    width: "250px",
                    height: "280px",
                    marginTop: "20px",
                    marginBottom: "15px",
                    zIndex: 0,
                }} /// these are optional style, it is not necessary
            >
                <Chip className={classes.price} icon={<LocalOffer className={classes.iconPrice} />} label={`S./ ${product.price}`} />
                <FrontSide
                    style={{ backgroundColor: "#3E3E3E", padding: 0, zIndex: 0 }}
                >
                    <img
                        src={product.imagePath}
                        alt='Portada'
                        height="280px"
                        width="250px"
                        style={{ zIndex: 0 }}
                    />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#3E3E3E" }}>
                    <Typography className={classes.title}>{product.name}</Typography>
                    <Typography className={classes.label}>{product.description}</Typography>
                    <Box className={classes.actions}>
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => setLike(!like)}
                        >
                            <Favorite
                                className={like ? classes.likeActive : classes.likeDeactive}
                            />
                        </IconButton>
                        <IconButton
                            aria-label="Add to cart"
                            onClick={() => handleShop(product._id)}
                        >
                            <ShoppingCart
                                className={shop ? classes.shopActive : classes.shopDeactive}
                            />
                        </IconButton>
                    </Box>
                    {alertSucess && <Alert variant="filled" severity="success">Agregado al carrito</Alert>}
                    {alertError && <Alert variant="filled" severity="error">Eliminado del carrito</Alert>}
                </BackSide>
            </Flippy>
        </>
    );
};

export default Card;
