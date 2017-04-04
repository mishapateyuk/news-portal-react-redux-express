import React from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import {removeNews} from '../actions/newsActionCtreators';

const mapDispatchToProps = (dispatch) => ({
  removeNews: (id) => dispatch(removeNews(id)),
});

class RemoveNews extends React.PureComponent {

  buttonHandler() {
    const id = this.props.params.id;
    this.props.router.push(`/`);
    this.props.removeNews(id);
  };

  render() {
    return (
      <div>
        Do you really wanna delete news ?
        <br />
        <button
          className="button"
          onClick={this.buttonHandler.bind(this)}
        >
          DELETE
        </button>
      </div>
    );
  };
};

export default connect(null, mapDispatchToProps)(withRouter(RemoveNews));
