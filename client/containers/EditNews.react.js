import React from 'react';
import Loading from '../components/Loading.react';
import NewsForm from '../components/NewsForm.react';
import {connect} from 'react-redux';
import {editNews} from '../actions/newsActionCtreators';

const mapDispatchToProps = (dispatch) => ({
  editNews: (newsInfo) => dispatch(editNews(newsInfo)),
});

const mapStateToProps = ({news}) => ({
  news: news.all,
});

class EditNews extends React.PureComponent {
  constructor() {
    super();
    this.currentDate = (new Date()).toISOString().slice(0, -14).split('T').join(' ');
  };

  render() {
    if (this.props.news === null) {
      return (
        <div className="news-wrapper">
          <Loading />
        </div>
      );
    } else {
      const id = this.props.params.id;
      const editingNews = this.props.news.find((item) => item.id == id);
      const {title, author, shortDescription, fullDescription, tags} = editingNews;
      const _tags = tags.map((tag) => ({value: tag, label: tag,}));
      return (
        <NewsForm
          id={id}
          title={title}
          author={author}
          tags={_tags}
          publishDate={this.currentDate}
          shortDescription={shortDescription}
          fullDescription={fullDescription}
          buttonText={'Edit news'}
          clickHandler={this.props.editNews}
        />
      );
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNews);
