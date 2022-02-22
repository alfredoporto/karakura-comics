import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    header: {
        backgroundColor: '#0490CB', borderRadius: '8px', padding: '10px 20px',
        justifyContent: 'space-between'
    },
    root:{
        marginTop: '25px'
    },
    label: {
        color: 'white',
        fontSize: '20px'
    },
    sublabel: {
        textAlign: 'center'
    },
    icon: {
        color: 'red'
    },
    divider: {
        width: '100%'
        
    }
}));