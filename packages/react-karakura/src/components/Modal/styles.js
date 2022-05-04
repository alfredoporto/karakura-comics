import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        color: 'black',
        width: '250px'
    },
    header: {
        marginBottom: '10px'
    },
    title: {
        marginTop: '55px',
        position: 'absolute',
        color: 'black',
        fontWeight: 'bold'
    },
    sublabel: {
        color: 'black',
        textAlign: 'center'
    },
    address: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '5px'
    },
    iconClose: {
        position: 'absolute',
        top: '8px',
        right: '1px'
    }
}));