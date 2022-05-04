import { makeStyles } from "@material-ui/core/styles";
import { BorderBottom } from "@material-ui/icons";

export default makeStyles(() => ({
    root: {
        marginTop: '55px',
        color: 'black',
        height: '100vh'
    },
    header: {
        backgroundColor: 'white',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        padding: '15px 25px',
        borderBottom: '1px solid black'
    },
    labelHeader: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    label: {
        fontSize: '14px',
        marginBottom: '15px',
        color: 'white'
    },
    sublabel: {
        textAlign: 'center'
    },
    icon: {
        color: 'red'
    },
    divider: {
        margin: '10px 10px',
        width: '100%',
        backgroundColor: 'white'
    },
    celda: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    card: {
        borderRadius: '8px',
        border: '1px solid white',
        height: '250px',
        backgroundColor: 'white'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px 20px',
        backgroundColor: 'white'
    },
    labelContainer: {
        padding: '20px 10px',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    btnPagar: {
        backgroundColor: 'black',
        padding: '8px',
        color: 'white',
        width: '200px'
    },
    cesta: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'white'
    },
    iconAmount: {
        color: 'white'
    }
}));