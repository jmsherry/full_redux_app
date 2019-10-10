import React from 'react';
import { connect } from 'react-redux';
import ACTIONS from "./../../redux/actions/shower";

function Shower(props) {
  let output = null;
  if (props.visible) {
    output = 'visible'
  } else {
    output = 'You can\'t see me'
  }
  
  return (
    <>
      <h1>{output}</h1>
      <button onClick={props.toggle}>Toggle</button>
    </>
  );
}

const mapStateToProps = state => ({
  visible: state.shower.showerVisible
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(ACTIONS.toggleShowerVisibility())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shower);






// export default Shower;