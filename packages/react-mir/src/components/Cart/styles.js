import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        marginTop: '55px',
        color: 'black'
    },
    header: {
        backgroundColor: 'black',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        padding: '15px 25px',
    },
    labelHeader:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        fontSize: '20px',
        marginBottom: '15px'
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
        borderColor: 'black'
    },
    celda:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    card: {
        borderRadius: '8px',
        border: '1px solid black',
        height: '250px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '60%',
        justifyContent: 'center',
        padding: '10px 20px'
    },
    labelContainer: {
        padding: '20px 10px',
        fontWeight: 'bold',
        fontSize: '16px'
    },
    btn: {
        backgroundColor: 'black',
        padding: '8px',
        width: '100px',
        color: 'white'
    }
}));