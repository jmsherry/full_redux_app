import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import ACTIONS from "./../../redux/actions/ui";
import { connect } from "react-redux";

const useStyles = makeStyles({
  listContainer: {
    width: 250,
  },
  list: {
    padding: 0,
  },
  item: {
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    flexGrow: 1,
    padding: '15px',
    color: '#000',
    '&:hover': {
      fontWeight: 'bold'
    },
    '&.active': {
      fontWeight: 'bold',
      backgroundColor: '#666',
      color: '#fff',
    },
  }
});



function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();

  const sideList = side => (
    <div
      className={classes.listContainer}
      role="presentation"
      onClick={props.toggleMenu}
      onKeyDown={props.toggleMenu}
    >
      <List className={classes.list}>
        {['Home', 'Shop', 'Cupboard', 'Meals', 'Test'].map((text) => {
          // const isHomeRoute = 
          const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} activeClassName={'active'} {...props} className={classes.link} />);
          return (
            <ListItem button key={text} className={classes.item}>
              <Link component={Link1} to={text === 'Home' ? '/' : `/${text.toLowerCase()}`} exact={true}>{text}</Link>
            </ListItem>
          );
        })}
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