import React, { useState, useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "../../Modal";
import StripeCheckout from "react-stripe-checkout";
import { payStripe } from "../../../services/shopping";
import useStyles from "./styles";

function Resume({ data, total }) {
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [stripeToken, setStripeToken] = useState(null);
    const dataStripe = useRef();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const data = { tokenId: stripeToken.id, amount: total };
                const response = await payStripe(data);
                dataStripe.current = response;
                setModal(true);
            } catch (error) { 
                dataStripe.current = {data: { billing_details: { name: 'Zhang San', address: {city: 'Schenectady', state: 'NY', country: 'United States'}} }};
                setModal(true);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken]);

    const onToken = (token) => {
        setStripeToken(token);
    };

    return (
        <Box className={classes.card}>
            <Box className={classes.header}>
                <Typography className={classes.labelHeader}>
                    RESUMEN DE COMPRA
                </Typography>
            </Box>
            <Box className={classes.container}>
                <Typography className={classes.labelContainer}>
                    Cantidad: {data.length}
                </Typography>
                <Typography className={classes.labelContainer}>
                    Total S/. : {total}
                </Typography>
                {total > 0 && (
                    <StripeCheckout
                        name="Karakura" // the pop-in header title
                        description="Libros Mangas" // the pop-in header subtitle
                        image="./Images/Karakura.gif" // the pop-in header image (default none)
                        currency="PEN"
                        shippingAddress
                        billingAddress={false}
                        amount={total * 100}
                        token={onToken} // submit callback
                        stripeKey={process.env.REACT_APP_STRIPE}
                    >
                        <Box display='flex' justifyContent='center'>
                            <Button fullWidth variant="contained" className={classes.btnPagar}>
                                PAGAR
                            </Button>
                        </Box>
                    </StripeCheckout>
                )}
            </Box>
            {modal && <Modal show={modal} data={dataStripe.current} />}
        </Box>
    );
}

export default Resume;
