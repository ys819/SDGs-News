import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import NavMenu from './NavMenu' 
import img1 from './Img/sDGs.png'
import img2 from './Img/logo.jpg'


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    img1: {
      height: '100px',
      width: '200px',
       [theme.breakpoints.down('xs')]: {
        height: '50px',
        width: '90px'
      },
      [theme.breakpoints.up('sm')]: {
        height: '80px',
        width: '150px'
      },
},
  img2: {
    height: '100px',
    width: '100px',
     [theme.breakpoints.down('xs')]: {
      height: '50px',
      width: '50px'
    },
    [theme.breakpoints.up('sm')]: {
      height: '80px',
      width: '80px'
    },
    },
  }));


export default function HideAppBar(props) {
    const classes = useStyles();

  return (
    <div className={classes.root}>
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <NavMenu />
          </IconButton>
            <Typography  variant="h5">
              <img className={classes.img1} src={img1} /> 
              <img className={classes.img2} src={img2} />
              </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
    </div>

  );
}