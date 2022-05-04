import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  avatar: {
    backgroundColor: 'black',
    marginBottom: '10px'
  },
  btnLogin: {
    backgroundColor: 'black',
    color: 'white',
    marginTop: 3,
    marginBottom: 2
  },
  iconBack: {
    color: 'black',
  },
  iconEye: {
    cursor: 'pointer'
  },
  link: {
    cursor: 'pointer',
    "&:hover, &:focus": {
      fontWeight: 'bolder',
    },
  },
  alert: {
    marginTop: '20px'
  }
}));