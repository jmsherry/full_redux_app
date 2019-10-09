import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import ACTIONS from "./../../redux/actions/ui";
import { connect } from "react-redux";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



function Menu(props) {
  const classes = useStyles();

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleMenu}
      onKeyDown={props.toggleMenu}
    >
      <List>
        {['Home', 'Shop', 'Cupboard', 'Meals'].map((text) => (
          <ListItem button key={text}>
            <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (

    <div>
      <Drawer open={props.menuOpen} onClose={props.closeMenu}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

const mapStateToProps = state => ({
  menuOpen: state.ui.menuOpen
});

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(ACTIONS.closeMenu()),
  toggleMenu: () => dispatch(ACTIONS.toggleMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);