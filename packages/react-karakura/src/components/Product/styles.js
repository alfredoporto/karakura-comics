import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: '250px',
    margin: '30px 0px',
    backgroundColor: 'black',
    borderRadius: '8px'
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
  label: {
    color: 'white'
  },
  price: {
    backgroundColor: '#3DADFF',
    color: 'white'
  },
  likeActive: {
    color: 'red'
  },
  likeDeactive: {
    color: 'gray'
  },
  shopActive: {
    color: '#3DADFF'
  },
  shopDeactive: {
    color: 'gray'
  },
  expand:{
    color: 'white'
  }
}));