import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: 'white',
    padding: '15px 35px'
  },
  containerLoad: {
    display:'flex',
    justifyContent:"center", 
    marginTop: '250px',
    height: '100%'
  },
  loader:{
    color: 'black',
  }

}));
