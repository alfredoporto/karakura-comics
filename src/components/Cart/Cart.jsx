import React, { Fragment } from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const Cart = () => {
    { /* ticket: hacerlo dinamico */ }
    const isEmpty = true;

    const GenerateEmptyCart = () => (
        <Typography variant="subtitle1">
            Ups, parece que no tienes ningun item en tu carrito :o
        </Typography>
    )

    const GenerateFilledCart = () => (
        { /* ticket: jalar los items de la API commerce, y implementar el CartItem component*/ }

    )

    return (
        <Container>
            <div className={mergeClasses.toolbar} />
            <Typography className={mergeClasses.title} variant="h4"> Carrito de compras</Typography>
            {isEmpty ? <GenerateEmptyCart /> : <GenerateFilledCart />}
        </Container>
    )
}

export default Cart