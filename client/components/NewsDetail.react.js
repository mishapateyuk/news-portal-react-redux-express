import React from 'react';
import Loading from '../components/Loading.react';
import {connect} from 'react-redux';

const mapStateToProps = ({news}) => ({
  news: news.all,
});

class NewsDetails extends React.PureComponent {

  render() {
    const id = this.props.params.id;
    const {news} = this.props;
    if (news === null) {
      return (
        <div className="news-wrapper clearfix">
          <Loading />
        </div>
      );
    } else {
      const currentNews = this.props.news.find((item) => item.id == id);
      return (
        <div className="newsWrapper">
          <p>
            <b>Title: </b>{currentNews.title}
          </p>
          <p>
            <b>Author: </b>{currentNews.author}
          </p>
          <p>
            <b>Date: </b>{currentNews.publishDate}
          </p>
          <p>
            <b>Tags: </b>{currentNews.tags.join(', ')}
          </p>
          <p>
            <b>Description: </b>{currentNews.fullDescription}
          </p>
        </div>
      );
    };
  };
};

export default connect(mapStateToProps, null)(NewsDetails);
