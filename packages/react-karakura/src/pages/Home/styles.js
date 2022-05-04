import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: 'black',
    padding: '35px'
  },
  containerLoad: {
    display: 'flex',
    justifyContent: "center",
    marginTop: '250px',
    height: '100%'
  },
  loader: {
    color: 'black',
  },
  label: {
    marginTop: '10px',
    marginBottom: '15px',
    fontSize: '18px',
    color: 'white'
  },
  divider: {
    width: '80%',
    backgroundColor: 'white'
  },
  menuRight: {
    display:'flex',
    flexDirection:'row-reverse',
    marginTop: '20px',
    marginBottom: '30px',
    marginRight: '35px'
  },
  iconHistory:{
    color: 'black',
    padding: 0,
    margin: 0
  },
  boxIcon:{
    padding: 7,
    height: '25px',
    borderRadius: '6px',
    backgroundColor: 'white',
    marginRight: '12px'
  },
  search: {
    borderRadius: '8px',
    width: '95%',
    backgroundColor: 'white'
  },
  sidebar: {
    backgroundColor: 'black'
  }
}));
