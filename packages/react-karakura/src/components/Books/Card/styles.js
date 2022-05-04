import { makeStyles } from "@material-ui/core/styles";
const random_color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
console.log(random_color)

export default makeStyles(() => ({
  title: {
    textAlign: "left",
    color: 'white',
    fontSize: '14px',
    marginBottom: '15px',
  },
  label: {
    textAlign: "justify",
    color: 'white',
    fontSize: '14px'
  },
  likeActive: {
    color: 'red'
  },
  likeDeactive: {
    color: 'white'
  },
  shopActive: {
    color: '#3DADFF'
  },
  shopDeactive: {
    color: 'gray'
  },
  price: {
    position: 'absolute',
    zIndex: 100,
    right: '3px',
    top: '5px',
  },
  iconPrice: {
    color: 'green'
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  }
}));