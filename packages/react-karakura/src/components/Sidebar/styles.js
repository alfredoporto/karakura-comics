import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: 'black',
    padding: '0px 10px',
    mr: 3,
    width: '14vw',
    position: 'fixed'
  },
  logo:{
    display: 'flex', 
    justifyContent: 'center', 
    color: 'black'
  },
  activeItem: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '3px',
    display: 'flex',
    padding: '8px 8px',
    margin: '20px 0px',
    textDecoration: 'none',
  },
  desactiveItem: {
    borderRadius: '8px',
    display: 'flex',
    color: 'white',
    backgroundColor: 'transparent',
    padding: '8px 8px',
    margin: '20px 0px',
    textDecoration: 'none'
  },
  icon: {
    marginRight: '5px'
  },
  iconLogout: {
    marginRight: '15px',
    fontSize: '25px'
  },
  logout: {
    display: 'flex',
    marginTop: '50vh',
    color: 'white',
    textDecoration: 'none'
  }
}));
