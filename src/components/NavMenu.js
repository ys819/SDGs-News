import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import icon01 from './itemData/icon01.png'
import icon02 from './itemData/icon02.png'
import icon03 from './itemData/icon03.png'
import icon04 from './itemData/icon04.png'
import icon05 from './itemData/icon05.png'
import icon06 from './itemData/icon06.png'
import icon07 from './itemData/icon07.png'
import icon08 from './itemData/icon08.png'
import icon09 from './itemData/icon09.png'
import icon10 from './itemData/icon10.png'
import icon11 from './itemData/icon11.png'
import icon12 from './itemData/icon12.png'
import icon13 from './itemData/icon13.png'
import icon14 from './itemData/icon14.png'
import icon15 from './itemData/icon15.png'
import icon16 from './itemData/icon16.png'
import icon17 from './itemData/icon17.png'
import icon18 from './itemData/icon18.png'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="transparent"
        size="small"
        onClick={handleClick}
      >
       <MenuIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/News1'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon01}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>
        
        <Link to='/News2'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon02}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News3'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon03}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News4'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon04}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>
        
        <Link to='/News5'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon05}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News6'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon06}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News7'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon07}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>
        
        <Link to='/News8'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon08}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News9'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon09}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News10'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon10}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>
        
        <Link to='/News11'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon11}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News12'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon12}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News13'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon13}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>
        
        <Link to='/News14'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon14}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News15'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon15}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/News16'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon16}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>
        
        <Link to='/News17'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon17}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        <Link to='/'>
         <StyledMenuItem>
          <ListItemIcon>
           <img src={icon18}/>
          </ListItemIcon>
         </StyledMenuItem>
        </Link>

        

      
      </StyledMenu>
    </div>
  );
}