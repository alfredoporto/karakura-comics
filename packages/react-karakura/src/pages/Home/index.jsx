import { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "../../components/Books/Card";
import CardLast from "../../components/Books/CardLast";
import Sidebar from "../../components/Sidebar";
import useStyles from './styles';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import { userContext } from '../../hook/user';
import { getBooks } from '../../services/products';

const Products = () => {
    const [books, setBooks] = useState([]);
    const [lastBooks, setLastBooks] = useState([]);
    const { user } = useContext(userContext);
    const classes = useStyles();

    useEffect(() => {
        async function getAllBooks() {
            try {
                const response = await getBooks();
                setBooks(response);
                const size = response.length;
                const last = response.slice(size-3,size);
                setLastBooks(last);
                console.log(response)
            } catch (error) {
                setBooks([]);
                console.log(error);
            }
        }
        getAllBooks();
    }, []);

    return (
        <Grid container>
            <Grid item xs={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={7} className={classes.root}>
                <TextField
                    className={classes.search}
                    variant='outlined'
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Grid container direction="row" justifyContent="space-between">
                    {books.map((product, index) => (
                        <Grid key={index} item xs={6} sx={{ mb: 2 }}>
                            <Card product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={3} className={classes.sidebar}>
                <Box className={classes.menuRight}>
                    <img src="./Images/user.png" width='50px' />
                    {/* <Typography className={classes.label}>{user.name.split('') || ''}</Typography> */}
                    </Box>
                <Box display='flex'>
                    <Box className={classes.boxIcon}><HistoryIcon className={classes.iconHistory} /></Box>
                    <Typography className={classes.label}>Ultimos Ingresos</Typography>
                </Box>
                <Divider className={classes.divider} />
                {lastBooks.map((product, index) => (
                    <Grid key={index} item sx={{ mb: 2 }}>
                        <CardLast product={product} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Products;
