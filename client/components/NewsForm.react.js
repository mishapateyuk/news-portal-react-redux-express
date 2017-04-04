import React from 'react';
import Select from './Select.react';
import { getTags } from '../models/tagsModel.js';
import { newId } from '../models/articleModel.js';
import { withRouter } from 'react-router';

class NewsForm extends React.PureComponent {

  constructor(props) {
    super(props);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.state = {tags: this.props.tags};
    this.options = getTags().map((tag) =>({
      value: tag,
      label: tag,
    }));
  };

  onChangeTags(value) {
    this.setState({
      tags: value,
    });
  };

  getNewsInfo() {
    const tags = this.state.tags.map((tag) => tag.value);
    this.id = this.props.id || newId();
    const newsInfo = {
      id: this.id,
      author: this.props.author,
      publishDate: this.props.publishDate,
      title: this.titleInput.value,
      tags: tags,
      shortDescription: this.shortDescription.value,
      fullDescription: this.fullDescription.value,
    };
    return newsInfo;
  };

  render() {
    const {title, author, publishDate, shortDescription, fullDescription, buttonText} = this.props;
    return (
      <div className="news-wrapper">
        <p className="input-wrapper">
          Title:
          <span>
            <input placeholder="title" maxLength="100"
              ref={(input) => this.titleInput = input}
              defaultValue = {title}
            />
          </span>
        </p>
        <p className="input-wrapper">
          Author: <input disabled value={author}/>
        </p>
        <p className="input-wrapper">
          Publish date: <input disabled value={publishDate} />
        </p>
        Tags:
        <Select multi className="modal-select" style={{width: 373, marginTop: 10}}
          options={this.options}
          onChange={this.onChangeTags}
          value={this.state.tags}
        />
        <p>
          <textarea rows="10" cols="50" maxLength="200" placeholder="short description"
            ref={(textarea) => this.shortDescription = textarea}
            defaultValue = {shortDescription}
          />
        </p>
        <p>
          <textarea rows="10" cols="50" placeholder="full description"
            ref={(textarea) => this.fullDescription = textarea}
            defaultValue = {fullDescription}
          />
        </p>
        <button className="button add-news"
          onClick={() => {
              this.props.clickHandler(this.getNewsInfo());
              this.props.router.push(`/detail/${this.id}`);
            }
          }
        >
          {buttonText}
        </button>
      </div>
    );
  };
};

export default withRouter(NewsForm);
