import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { userContext } from "../../hook/user";
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import ArrowCircleRightOutlinedIcon from '@material-ui/icons/ArrowRightRounded';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import PersonAddAlt1Icon from '@material-ui/icons/PersonAddOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Alert from '@material-ui/lab/Alert';
import useStyles from './styles';

import { register, login } from '../../services/login';

export default function Login({ open }) {
    const [show, setShow] = useState(open);
    const [password, setPassword] = useState(true);
    const [viewRegister, setviewRegister] = useState(false);
    const [status, setStatus] = useState(null);
    const { addUser } = useContext(userContext);
    let navigate = useNavigate();
    const classes = useStyles();

    useEffect(() => {
        setShow(open)
    }, [open]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { email: event.target.email.value, password: event.target.password.value };
        console.log(event.target.email.value, event.target.password.value);
        if (viewRegister) {
            data.name = event.target.name.value;
            const response = await register(data);
            setStatus(response);
            setTimeout(function () { setviewRegister(false); setStatus(null) }, 3000);
        } else{
            const user = await login(data);
            addUser(user);
            navigate("/products", { replace: true });
            console.log(user);
        }
    }

    return (
        <Drawer
            anchor='right'
            open={show}
            elevation={10}
        >
            <Box justifyContent='left'>
                <IconButton color="primary" onClick={() => setShow(false)}>
                    <ArrowCircleRightOutlinedIcon className={classes.iconBack} />
                </IconButton>
            </Box>
            <Box
                sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar className={classes.avatar}>
                    {viewRegister ? <PersonAddAlt1Icon /> : <PersonOutlineIcon />}
                </Avatar>
                <Typography component="h1" variant="h5">
                    {viewRegister ? 'Registrarse' : 'Iniciar Sesión'}
                </Typography>
                <Box sx={{ mt: 1, mx: 10 }}>
                    <form onSubmit={handleSubmit}>
                        {viewRegister &&
                            <Box sx={{ my: 5 }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="name"
                                    label="Nombre"
                                    variant="outlined"
                                    id="name"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" className={classes.iconEye}>
                                                <AccountBoxIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        }
                        <Box sx={{ my: 5 }}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                autoFocus
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <MailOutlineIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type={password ? "password" : "text"}
                            variant="outlined"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" className={classes.iconEye} onClick={() => setPassword(!password)}>
                                        {password ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {status && <Alert className={classes.alert} severity={status === 201 ? "success" : "error"}>{status === 201 ? "Registro exitoso" : "Ha ocurrido un error"}</Alert>}
                        <Box sx={{ my: 5 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.btnLogin}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {viewRegister ? 'Registrarse' : 'Ingresar'}
                            </Button>
                        </Box>
                    </form>
                    <Grid container className={classes.link} justifyContent='center' onClick={() => setviewRegister(!viewRegister)}>
                        <Typography>{viewRegister ? 'Iniciar Sesión' : 'Registrarse'}</Typography>
                    </Grid>
                </Box>
            </Box>
        </Drawer >
    );
}