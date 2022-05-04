import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: '250px',
    height: '100px',
    margin: '30px 0px',
    backgroundColor: '#3E3E3E',
    borderRadius: '8px'
  },
  cardMedia: {
    borderRadius: '8px'
  },
  cardContent: {
    display: 'flex'
  },
  media: {
    width: '60px',
    height: 0,
    paddingTop: '5%', //16:9
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
    textAlign: "left",
    color: 'white',
    fontSize: '14px'
  },
  price: {
    backgroundColor: '#3DADFF',
    color: 'black'
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
    color: 'black'
  },
  actions: {
    marginTop: -15
  }
}));