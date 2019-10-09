import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './../Menu';
import ACTIONS from "./../../redux/actions/ui";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Menu />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.toggleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            KitchenApp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );

}

// Cupboard.defaultProps = {
//   items: []
// };

// const mapStateToProps = state => ({
//   items: state.cupboard.items
// });

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(ACTIONS.toggleMenu())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
