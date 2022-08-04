import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  Theme,
  createStyles,
} from '@material-ui/core';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import DrawerComponent from './drawer';
// import logo from '../img/logo.png';
import './navbar.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navlinks: { marginLeft: theme.spacing(0), display: 'flex' },
    logo: {
      flexGrow: 0,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    link: {
      border: '1px solid',
      borderRadius: '10px',
      padding: '3px 6px',
      textDecoration: 'none',
      color: '#8d909a',
      fontSize: '20px',
      marginLeft: theme.spacing(2),
      '&:hover': { color: 'white' },
    },
  })
);

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const Keyframes = styled('div')({
    '@keyframes pulsate': {
      from: {
        opacity: 1,
        transform: 'scale(0.5)',
      },
      to: {
        opacity: 0,
        transform: 'scale(1.7)',
      },
    },
    animation: 'pulsate 1.5s infinite ease',
    position: 'relative',
  });

  return (
    <AppBar position='static' className='app-nav'>
      <CssBaseline />
      <Toolbar className='tools'>
        <Typography variant='h4' className={classes.logo}>
          <img src='./img/logo.png' alt='Logo' className='tools-img' />
        </Typography>
        <Keyframes className='title'>SOCIETYKEY</Keyframes>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to='/' className={classes.link}>
              Home
            </Link>
            <Link to='/societykey' className={classes.link}>
              Societykey
            </Link>
            <Link to='/' className={classes.link}>
              Society Localist
            </Link>
            <Link to='/' className={classes.link}>
              Society Rides
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
