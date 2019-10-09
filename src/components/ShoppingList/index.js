import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import uuid from 'uuid';
// import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function generateListItems(items, classes) {
  return items.map(item => (
    <ListItem key={uuid()} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.avatarURL || ''} />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {`£${(item.price/100).toFixed(2)}`}
              </Typography>
            </>
          }
        />
      </ListItem>
  ))
}

function ShoppingList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {generateListItems(props.items, classes)}
    </List>
  );
}

const mapStateToProps = state => ({
  items: state.shop.items
});

// const mapDispatchToProps = dispatch => ({
//   closeMenu: () => dispatch(ACTIONS.closeMenu()),
//   toggleMenu: () => dispatch(ACTIONS.toggleMenu())
// });

export default connect(
  mapStateToProps,
  null
)(ShoppingList);
