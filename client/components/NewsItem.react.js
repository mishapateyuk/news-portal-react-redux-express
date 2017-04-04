import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps =
  (state) => ({
    user: state.userData.user,
  });

class NewsItem extends React.PureComponent {

  showAdvancedProperties() {
    if (this.props.user !== 'Guest') {
      const id = this.props.newsData.id;
      return (
        <div className="button-box">
          <Link to={`/edit/${id}`} className="edit-news">Edit<br />news</Link>
          <Link to={`/remove/${id}`} className="remove-news">Remove<br /> news</Link>
        </div>
      );
    }
  };

  render() {
    const {title, author, publishDate, shortDescription, id, tags} = this.props.newsData;
    return (
      <div className="news clearfix">
        <p className="news-title">
          <b>News title: </b>{title}
        </p>
        <p className="news-author">
          <b>Author: </b>{author}
        </p>
        <p className="news-publish-date">
          <b>Publish date: </b>{publishDate}
        </p>
        <p className="news-description">
          <b>Description: </b>{shortDescription}
        </p>
        <p className="news-tags">
          <b>Tags: </b>{tags.join(', ')}
        </p>
        {this.showAdvancedProperties()}
        <Link to={`/detail/${id}`} className="news-btn">View<br /> full<br /> news</Link>
      </div>
    );
  };
};

export default connect(mapStateToProps, null)(NewsItem);
