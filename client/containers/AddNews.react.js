import React from 'react';
import Loading from '../components/Loading.react';
import NewsForm from '../components/NewsForm.react';
import {connect} from 'react-redux';
import {addNews} from '../actions/newsActionCtreators';

const mapStateToProps = (state) => ({
  author: state.userData.user,
});

const mapDispatchToProps = (dispatch) => ({
  addNews: (newsInfo) => dispatch(addNews(newsInfo)),
});

class AddNews extends React.PureComponent {
  constructor() {
    super();
    this.currentDate = (new Date()).toISOString().slice(0, -14).split('T').join(' ');
  };

  render() {
    return (
      <NewsForm
        title={''}
        author={this.props.author}
        publishDate={this.currentDate}
        shortDescription={''}
        fullDescription={''}
        buttonText={'Add news'}
        tags={[]}
        clickHandler={this.props.addNews}
      />
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNews);
