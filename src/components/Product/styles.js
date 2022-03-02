import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: '300px',
    margin: '30px 0px',
    backgroundColor: 'white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },
  CardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label:{
    color: 'black'
  }
}));